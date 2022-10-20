import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  capacity=""

  readValues=()=>{
    let data={
      "capacity":this.capacity

    }
    console.log(data)
   this.myapi.searchflight(data).subscribe(
    (Response)=>{
      this.data=Response
    }
   )
  }
 data:any=[]
 
  ngOnInit(): void {
  }

}
