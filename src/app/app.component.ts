import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { PreferencesService } from './services/preferences.service';
import { register } from 'swiper/element/bundle';
//import { PushNotificationService } from './services/push-notification.service';


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private preferenceService:PreferencesService, private router:Router) {
    
  }
  
    
  async logout() {
    await this.preferenceService.removetoken().then((res)=>{
      
      //for remove token
      console.log("remove sucessfully",res)
      this.router.navigate(['loginpage']);
    }).catch((error)=>{
      console.log("fail remove token",error)
    })  
  }
  async openBrowser () {
    await Browser.open({toolbarColor:"#f4dc41", url: 'https://www.navitus.tech/' 
  });
    Browser.addListener('browserPageLoaded', () => {
    console.log("browser PageLoaded event called");
  });
  Browser.addListener('browserFinished', () => {
    console.log("browser finished event called");
  });
  
}

}
