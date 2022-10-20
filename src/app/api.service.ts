import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

   viewflight=()=>{
    return this.http.get("http://localhost:8080/viewflight")
  }

  addflight=(data:any)=>{
    return this.http.post("http://localhost:8080/addflight",data)
  }

  deleteflight=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteflight",data)
  }
  searchflight=(data:any)=>{
    return this.http.post("http://localhost:8080/searchflight",data)
  }

  ngOnInit(): void {
  }

}
