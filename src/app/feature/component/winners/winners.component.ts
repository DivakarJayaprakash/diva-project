import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
interface winners {
  name: string;
 
  score: number;
}
@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  dataSource: MatTableDataSource<winners>;
  tableColumns: string[] = ['name', 'score'];

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<winners>();
  }
  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<winners[]>('https://chitto-tech-default-rtdb.firebaseio.com/winners.json')
      .subscribe(data => {
        const winnersArray = Object.values(data);
      this.dataSource.data = winnersArray;
      console.log(this.dataSource.data);
        console.log(this.dataSource.data);
        
      });
  }}
