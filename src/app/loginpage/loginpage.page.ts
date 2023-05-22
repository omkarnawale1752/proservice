import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PreferencesService } from '../services/preferences.service';
import { ToastService } from '../services/toast.service';

import { LogiPageForm } from './loginpage.page.form';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  form: FormGroup;
  public islogin:boolean=true;
  public is_loading:boolean=true;
  passwordType:string='password';
  passwordShown:boolean=false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private preferenceService: PreferencesService,
    private toast: ToastService,) { }

  ngOnInit() {
    this.form = new LogiPageForm(this.formBuilder).createForm();
  }

  async ionViewWillEnter(){
    await this.preferenceService.getToken().then((value)=>{
      //token from preference
      
      if(value?.value){
        this.islogin=true
        console.log("token already exist",value.value)
        this.router.navigate(['home']);
      }else{
        this.islogin=false
      }
    
      
    }).catch((error)=>{
      console.log("fail to get token",error)
    })
    this.is_loading=false
  }
  
  

  async login() {
    this.is_loading=true
    console.log("form data", this.form.value)
    this.authService.login(this.form.value).subscribe(async (res) => {
      console.log("login api hit ", res);
      this.is_loading=false
      if (res.status_code == 200) {
        //success responce
        console.log("login successfull ", res);
        await this.preferenceService.setToken(res.token).then(() => {
          this.router.navigate(['home']);
        }).catch((error) => {
          console.log("fail to save token", error)
        })
      }else if (res.status_code == 401) {
        //invalid credential
        this.toast.presentToast(res.error)
        console.log("invalid credential")
      } else {
        //fail responce
        console.log("something went wrong", res)
      }
    }
    )
  }
  public showPassword(){
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType='password';
    }else{
      this.passwordShown=true;
      this.passwordType='password';
    }
  }

}
