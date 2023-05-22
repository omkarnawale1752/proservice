import { Injectable } from '@angular/core';

export interface productDto{
  id:number,
  task:string

}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listproduct:productDto[]=[]

  constructor() { }
  

add(item:productDto) {
  this.listproduct.push(item)
  }
  

update(item: productDto, index:number) {
  this.listproduct.find( (value, i) => {
    if(i ===  index) {
    
    value.task = item.task ?? value.task
  }
  })
}
splice (index:number) {
    this.listproduct = this.listproduct.filter( (_, i) => {
    return i !== index
    } )
    }
  }

  
  