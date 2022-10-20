import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor() { }
  flightname=""
  origin=""
  destination=""
  capacity=""

  readValues=()=>{
    let data={
      "flightname":this.flightname,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
