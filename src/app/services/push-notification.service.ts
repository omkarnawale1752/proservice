// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Capacitor } from '@capacitor/core';
// import { PushNotifications,PushNotificationsPlugin } from '@capacitor/push-notifications';
// import { Platform } from '@ionic/angular';

// @Injectable({
//   providedIn: 'root'
// })
// export class PushNotificationService {
//   token: string=""
  

//   constructor(private router:Router ,private platform:Platform) { }

//    public initPush(){
//     if (this.platform.is ('android')){
//       this.registerPush();
//     }
//   }
//   private registerPush(){
//     PushNotifications.requestPermission().then((permission)=>{
//       if(permission.granted){
//         PushNotifications.register();
//       }else{


//       }
//     });
//   }
//    addListeners(){
//       PushNotifications.addListener("registration",
//     (token) => {
//       console.log('Registration token: ', JSON.stringify(token));
//     });
  
//      PushNotifications.addListener('registrationError', (err:any )=> {
//       console.log('Registration error: ',JSON.stringify( err));
//     });
  
//     PushNotifications.addListener('pushNotificationReceived', 
//     async (notification)=> {
//       console.log('Push notification received: ',JSON.stringify(notification));
//     });
  
//      PushNotifications.addListener('pushNotificationActionPerformed', 
//     async (notification )=> {
//       const data=notification.notification.data;
//       console.log('Push notification action performed',JSON.stringify(  notification.notification));
//       if (data.detailsId){
//         this.router.navigateByUrl(`/push/${data.detailsId}`)
//       }
//     });

//   }
// }

