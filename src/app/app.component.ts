import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angula8-table-pagination';
  employees=[{
    "name":"John",
    "city":"Bengaluru"
  },
  {
    "name":"Ganesh",
    "city":"Bengaluru"
  },
  {
    "name":"Larry",
    "city":"Bengaluru"
  },
  {
    "name":"Rama",
    "city":"Bengaluru"
  },
  {
    "name":"Ravi",
    "city":"Bengaluru"
  },
  {
    "name":"Suresh",
    "city":"Bengaluru"
  },
  {
    "name":"Babu",
    "city":"Bengaluru"
  },{
    "name":"Ajay",
    "city":"Bengaluru"
  },
  {
    "name":"Deepak",
    "city":"Bengaluru"
  },
  {
    "name":"Prashanth",
    "city":"Bengaluru"
  },{
    "name":"Nikhil",
    "city":"Bengaluru"
  },
  {
    "name":"Sushma",
    "city":"Bengaluru"
  },
  {
    "name":"Sowmya",
    "city":"Bengaluru"
  }];
  

  config = {
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: this.employees.length
  };

  pageChanged(event) {
    this.config.currentPage = event;
  }


}
