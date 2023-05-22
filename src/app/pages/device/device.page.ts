import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';



@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  batteryLevel: number;
  isCharging: any;
  public getinfo:any;
  model: string;
  platform: string;
  operatingSystem: string;
  osVersion: string;
  manufacturer: string;

  constructor() { }

  ngOnInit() {
    this.getDeviceinfo();
  }
   async getDeviceinfo() {
    const info = await Device.getInfo();
    console.log(info);
    Device.getBatteryInfo().then((val)=>{
      this.batteryLevel=val.batteryLevel;
      this.isCharging=val.isCharging;
    })
    Device.getInfo().then((val)=>{
      this.model=val.model;
      this.platform=val.platform;
      this.operatingSystem=val.operatingSystem;
      this.osVersion=val.osVersion;
    })
  };

}
