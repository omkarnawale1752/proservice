import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.page.html',
  styleUrls: ['./templatedrivenform.page.scss'],
})
export class TemplatedrivenformPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form)
  }

}
