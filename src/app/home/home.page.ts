import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string;
  // serverResponse  : pData;
  nameFromServer: string;
  constructor(private http:HttpClient,
    private toastController:ToastController,
    private router:Router) {

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message:"form submitted successfully.!!",
      duration:2000
    })
    toast.present()
  }

  register(form) {

    this.http.post ('http://localhost:8080/posts', form.value).subscribe(response => {
        console.log( "POST RESPONSE" , response);
        form.reset();
        this.presentToast();
        this.router.navigateByUrl('login');
        // this.nameFromServer = response.name;
        // console.log(this.serverResponse,"hello from server")
      });
  }

}

// export interface pData{
//   result:string
// }
