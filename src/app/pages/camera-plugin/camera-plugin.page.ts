import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType,GalleryImageOptions, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-camera-plugin',
  templateUrl: './camera-plugin.page.html',
  styleUrls: ['./camera-plugin.page.scss'],
})
export class CameraPluginPage implements OnInit {
  public SelectPhotos:any;
  imgs:any=[];
  
  constructor(private loader:LoadingService) { }
  checkPlatformForWeb(){
     if (Capacitor.getPlatform()=='web')return true;
     return false;

  }

  ngOnInit() {}
  
 async getphoto(){
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: this.checkPlatformForWeb()? CameraResultType.DataUrl:CameraResultType.Uri,
    width:600,
    source:CameraSource.Prompt
  });
  console.log("images",image)
  this.SelectPhotos=image;
  if(this.checkPlatformForWeb())this.SelectPhotos.webPath=image.dataUrl;
  this.imgs.push(this.SelectPhotos.webPath)
  console.log("get images",this.imgs)
  
 }
 async cameraphoto(){
  return await Camera.getPhoto({
    quality:90,
    resultType:CameraResultType.Uri,
    source:CameraSource.Prompt
  })
 }
 }

