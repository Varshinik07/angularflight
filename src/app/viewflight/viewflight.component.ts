import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewflight().subscribe(
      (data)=>{
        this.viewflight=data
      }
    )
   }
 viewflight:any=[]
  ngOnInit(): void {
  }

}

