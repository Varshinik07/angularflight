import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }
 
  origin=""
  destination=""
  capacity=""

  readValues=()=>{
    let data={
      
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
    this.myapi.addflight(data).subscribe(
      (data)=>{
        alert("data added successfully")
      }
    )
  }

  ngOnInit(): void {
  }

}
