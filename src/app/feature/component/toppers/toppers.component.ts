import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
interface Toppers {
  name: string
  score: number;
}
interface usersData {
  [key: string]: Toppers[];
}
@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {

  dataSource: MatTableDataSource<Toppers>;
  tableColumns: string[] = ['name','score'];

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<Toppers>();
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<usersData>('https://chitto-tech-default-rtdb.firebaseio.com/users.json')
      .subscribe(data => {
        const userArray = Object.values(data)[0];
        const filteredWinnersArray = userArray.filter(user => user.score>90);
        this.dataSource.data = filteredWinnersArray;
        console.log(this.dataSource.data);
      });
  }
}

