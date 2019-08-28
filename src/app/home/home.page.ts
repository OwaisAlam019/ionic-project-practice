import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string;
  serverResponse  : pData;
  nameFromServer: string;
  constructor(private http:HttpClient) {

  }
  checkName(){
    let data = {
      name:this.name
    }
    
    this.http.post <pData> ('http://localhost:8080/posts',data).subscribe(response => {
        console.log("POST RESPONSE",response)
        this.nameFromServer = response.name;
        console.log(this.serverResponse,"hello from server")
      })
  }

}

export interface pData{
  name:string
}
