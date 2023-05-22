import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoadingService } from './loading.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class HospiService {
  navData:any;

  constructor(private http:HttpClient,
     private loadingservice:LoadingService,
     private toastservice:ToastService) { }
  
  getemploydata(): Observable<any>{
    this.loadingservice.presentLoading();
    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }
  postemploydata(data:any){
    //const headers=new HttpHeaders();
    const options={withCredintials:false};
    const url='https://dev.navituscorporate.com/api/auth/login'
    return this.http.post(url,data);

  }
  
  getemploybyid(id:number): Observable<any>{
    this.loadingservice.presentLoading();
    return this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      catchError(error=>{
        let errorMsg:string;
        if(error.error instanceof ErrorEvent){
          errorMsg=`Error:${error.error.message}`;
        }else{
          errorMsg=this.getServerErrorMessage(error);
        }
        this.loadingservice.dismiss();
        this.toastservice.presentToast(errorMsg)
          return throwError(errorMsg);
        
      })
    );

  }
  private getServerErrorMessage(error:HttpErrorResponse):string{
    switch(error.status){
      case 404:{
      return `not found:${error.message}`;
    }
   
      case 403:{
      return `access denied:${error.message}`;
    }
    
      case 500:{
      return `internal server error:${error.message}`;
    }
    default:{
      return`unknown server error:${error.message}`;
    }
    }
  }
  setNavData(navObj: any){
    this.navData=navObj
  }
  getNavData(){
    return this.navData
  }

}
