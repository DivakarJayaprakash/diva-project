import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ConformationPopComponent } from '../conformation-pop/conformation-pop.component';


interface UserData {
  name: string;
  age: number;
  score: number;
}

interface usersData {
  [key: string]: UserData[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<UserData>;
  tableColumns: string[] = ['name', 'age', 'score', 'actions'];

  constructor(private http: HttpClient,public dialog:MatDialog) {
    this.dataSource = new MatTableDataSource<UserData>();
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<usersData>('https://chitto-tech-default-rtdb.firebaseio.com/users.json')
      .subscribe(data => {
        const userArray = Object.values(data)[0];
        const filteredWinnersArray = userArray.filter(user => user.age<=21);
        this.dataSource.data = filteredWinnersArray;
        console.log(this.dataSource.data);
      });
  }

  handleButtonClick(element: UserData): void {
    const payload = {
      name: element.name,
      score: element.score
    };
    const dialogRef=this.dialog.open(ConformationPopComponent,{})
    dialogRef.afterClosed().subscribe(data=>{
      if (data===1){
        this.http.post('https://chitto-tech-default-rtdb.firebaseio.com/winners.json', payload).subscribe(response => {
          // Handle response from the API if needed
          console.log('API response:', response);
        }, error => {
          // Handle error if the API request fails
          console.error('API error:', error);
        });
      }
    })
   
  }
}
