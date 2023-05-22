import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinatescroll',
  templateUrl: './infinatescroll.page.html',
  styleUrls: ['./infinatescroll.page.scss'],
})
export class InfinatescrollPage implements OnInit {
  page=0;
  perPage=10;

  array:any [] =[
    {
      id:1,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:2,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:3,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:4,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:5,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:6,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:7,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:8,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:9,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:10,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:11,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:12,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:13,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:14,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:15,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:16,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:17,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:18,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:19,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:20,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:21,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:22,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:23,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:24,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:25,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:26,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:27,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:28,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },
    {
      id:29,
      name:"omkar",
      email:"omkar@gmail.com",
      phone:"1234567890"
    },


  ];
  lists:any[]=[];

  constructor() { 
    
  }

  ngOnInit():void {
    this.lists=this.paginateArray();
  }
  paginateArray(){
    this.page++;
    return this.array.filter(
      x => x.id > (this.page * this.perPage - this.perPage) && x.id <= (this.page * this.perPage)
    )
  }
  loadMore(event){
    console.log(event);
    setTimeout(()=>{
      const array=this.paginateArray();
      console.log('new data:',array);
      this.lists=this.lists.concat(array);
      console.log('list data:',this.lists);
      event.target.complete();
      if(array?.length < this.perPage){
        event.target.disabled=true;
      };
    },1000);
  }

}
