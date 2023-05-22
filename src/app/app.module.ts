
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';





@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer,
    FileTransfer,
    
    
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
