import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { Plugins } from '@capacitor/core/types/global';
import { PushNotifications } from '@capacitor/push-notifications';
//import { PushNotificationService } from 'src/app/services/push-notification.service';


//const {PushNotifications}=Plugins

@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage implements OnInit {
   id=null;
  token:string="";

  constructor(
    private route:ActivatedRoute,
    //private pushservice:PushNotificationService
  ) { }
  async ionViewWillEnter(){
    let permStatus = await PushNotifications.checkPermissions();
    console.log("permission granted",permStatus)
  
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
      console.log("permission prompt",permStatus) 
    }
  
    if (permStatus.receive !== 'granted') {
      console.log("permission not granted",permStatus)
      throw new Error('User denied permissions!');
    }  
  }

  ngOnInit() {
    
   PushNotifications.addListener("registration",
    (token)=>{
      this.token= token.value;
      console.log('get token',token)
    })
    PushNotifications.addListener('registrationError', (err )=> {
      console.log('Registration error: ', err);
    })
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log("we get notification",notification)
      alert(JSON.stringify(notification))
      })
      PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log('Push notification action performed', notification.actionId, notification.inputValue);
      })
    PushNotifications.register();
    
    }


      
     
  //    this.pushservice.initPush((params)=>{
  //     this.id=params.get('id');
  //    })
  // }
}


