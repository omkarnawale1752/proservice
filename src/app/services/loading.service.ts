import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  create: any;
  

  constructor( private loadingcontroller:LoadingController,private toastservice:ToastService) { }
  async presentLoading() {
    const loading = await this.loadingcontroller.create({
      cssClass: 'my-custom-class',
      duration: 2000,
      message: 'please wait',
    });

    await loading.present();
  } 
  dismiss(){
    this.loadingcontroller.dismiss();
    
  }
}

