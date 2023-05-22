import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HospiService } from './hospi.service';
import { PreferencesService } from './preferences.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private httpService:HospiService,
    private router:Router,
    private preferenceService:PreferencesService,
    private http:HttpClient
    ) { }

  login(postdata:any):Observable<any>{
    return this.httpService.postemploydata(postdata);
  }

  getuserData(token:string){
    const url='https://dev.navituscorporate.com/api/user-information'
    return this.http.post(url,null,{headers:({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})});
  }
  getcorporatedata(token:string){
    const url='https://dev.navituscorporate.com/api/corporate-features-new-android'
    return this.http.post(url,null,{headers:({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})});
  }
}
