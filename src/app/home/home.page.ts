
import { Component,ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { HospiService } from '../services/hospi.service';
import { PreferencesService } from '../services/preferences.service';
import { ToastService } from '../services/toast.service';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('swiper') slide
  swiperRef: ElementRef | undefined;
  swiperModules = [IonicSlides];
  public userdata:any
  public baseURL:string ="https://dev.navituscorporate.com"
  public corporateodata:any
  selectSlide:any;
  segment:string ="0";
  sliderOptions={
    initialSlide:0,
    slidePerView:1,
    speed:400
  }
  constructor(private preferenceService:PreferencesService,
    private tostService:ToastService,
    private router:Router,
    private hospi:HospiService,
    private authService:AuthService) { }


  async ionViewWillEnter(){
    await this.preferenceService.getToken().then(({value})=>{
      console.log('home page get token',value)
      
      if(value){
        this.authService.getuserData(value).subscribe((res)=>{
          console.log("get user data",res);
          let responce=JSON.parse(JSON.stringify(res))
          this.userdata=responce.response.user_details;

        })
        this.authService.getcorporatedata(value).subscribe((res)=>{
          console.log("get corporate data",res);
         let response=JSON.parse(JSON.stringify(res))
         this.corporateodata=response.response.corporate_details;
        }) 
      }
    }).catch((error)=>{
      console.log("fail to get token",error)
    })
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
  async segmentChanged(event){
    //console.log("change detected",event)
    //await this.selectSlide.slideTo(this.segment);
    await this.slide.slideTo(event.detail.value)
  }
  async slideChanged(event){
    //console.log("slide change detected",event)
    this.slide.getActiveIndex().then(selectedIndex=>{
      //console.log("actived slide index",selectedIndex)
    this.segment=String(selectedIndex)
    setTimeout(() => {
    document.getElementById(this.segment).scrollIntoView({behavior:'smooth',block:'center',inline:'center'})
      
    }, 300);
    })
    //this.selectSlide=slides;
    //slides.getActiveIndex().then(selectedIndex=>{
      //this.segment=selectedIndex
    //})
}
}
