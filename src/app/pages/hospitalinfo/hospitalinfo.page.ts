import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospiService } from 'src/app/services/hospi.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-hospitalinfo',
  templateUrl: './hospitalinfo.page.html',
  styleUrls: ['./hospitalinfo.page.scss'],
})
export class HospitalinfoPage  implements OnInit{

  public dataa:any
  public empdata:any
  public employinfo:any

  
  constructor(private hospi:HospiService,private route:ActivatedRoute,private router:Router,private loadingservice:LoadingService) {
   //this.loadPage()
  }
  
  //  loadPage(){
  // this.hospi.getHospitals().subscribe((res)=>{
  //   console.log(res);
  //   this.dataa= res;
  //   console.log(this.dataa);
  //   })
  //}
   ngOnInit(){
    
    let navdata=this.router.getCurrentNavigation().extras.state
    this.empdata=navdata;
    console.log(navdata['empid']);
    this.hospi.getemploybyid(navdata['empid']).subscribe(res=>{
      this.loadingservice.dismiss()
      this.empdata=res["empid"];
      console.log(res);
      this.employinfo=res;
    })
   }
 }
  