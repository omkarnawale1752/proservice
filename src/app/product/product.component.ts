import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';
import { productDto, ProductService } from '../product.service';
import { HospiService } from '../services/hospi.service';
import { ProductModuleComponent } from './product.modal';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  {
  product: productDto[]
  id!: number ;
  
 
  task!: string;
  handlerMessage: string;
  
  constructor(private productService:ProductService,
    private modalController:ModalController,
    private alertController :AlertController)
    
    {
      this.product=this.productService.listproduct
    }
 
      
    
     
  
  
  async openModal(item?:productDto,index?:number){
    const modal=await this.modalController.create({
      component:ProductModuleComponent,
      componentProps:{
        id:item?.id??null,
        
        task:item?.task??null,
        index:index??null
      
      },
      initialBreakpoint:0.5,
      breakpoints:[0.5]
       

    })
    modal.present()
  }
  async hapus(index:number){
  const alert=await this.alertController.create({
      header: 'delete product',
      message: 'are you sure ?',
      buttons: [
        {
          handler: () => {
            this.productService.splice(index);
            this.product = this.productService.listproduct;
            
          },
        
          text: 'ok',
          role:'confirm',
          },
        
        
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          
      ],
    });
    
    alert.present()
  
    

    
  }
}

@NgModule({
  declarations:[ProductComponent,ProductModuleComponent],
  imports:[CommonModule,RouterModule.forChild(
    [
      {
        path:'',
        component: ProductComponent
      }
    ]
  ),IonicModule,FormsModule,ReactiveFormsModule],
  providers:[ProductService]
})
export class ProductModule{}

