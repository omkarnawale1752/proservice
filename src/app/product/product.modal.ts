import {Component, Input} from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductService } from "../product.service";
import { HospiService } from "../services/hospi.service";

@Component({
    selector:'app-product-modal',
    template:
    `<ion-content>
    <ion-list>
    <ion-item>
    <ion-label>Task</ion-label>
    <ion-input type="string" [(ngModel)]="task" name="task">
    </ion-input>
    </ion-item>
    </ion-list> 
    <ion-button expand="block" *ngIf="index==null" (click)="tambah()" >Add</ion-button>
    <ion-button expand="block" *ngIf="index!==null" (click)="update()">Update</ion-button>
    </ion-content>`

})
export class ProductModuleComponent {
    @Input()id!: number
 
 @Input()task!: string
 @Input()index!: number
 datacome:any;
items:any;
navv: any;
 constructor(
    private productService:ProductService,private modalController:ModalController
    ,
    private hospi:HospiService
 ){
  this.datacome=JSON.stringify(this.hospi.getNavData()) 
 } 
 
 tambah(){
    const playload={
      id:this.id,
      
      task:this.task
    }
    this.productService.add(playload)
    this.id!=null
    
    this.task!=''
    this.modalController.dismiss()
  }
  update(){
    const playload={
        id:this.id,
        
        task:this.task
      }
      this.productService.update(playload,this.index!)
      this.id!=null
      
      this.task=''
      this.modalController.dismiss()
    
}
ngOnInit(): void {
  fetch('./assets/inputfile/input.json').then(res=>res.json()).then(json=>{
    
    this.items=json;
  });
}
}
  

