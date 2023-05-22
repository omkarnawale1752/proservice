import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HospiService } from 'src/app/services/hospi.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage  {
  public dataa:any
  id:any;


  constructor(private hospi:HospiService ,private router:Router , private loadingservice:LoadingService) { 
    this.loadPage()
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    // Perform your search logic here using the searchTerm
    console.log('Search term:', searchTerm);
  }
  loadPage(){
  this.hospi.getemploydata().subscribe((res)=>{
    this.loadingservice.dismiss()
    console.log(res);
    this.dataa= res;
    console.log(this.dataa);
    
    
  })
  
 
    
}
onclick(id){
  let data:NavigationExtras={state:{empid:id}}
  this.router.navigate(['/hospitalinfo'],data)


 }
 handleRefresh(event){
  this.loadPage();
 }
}

