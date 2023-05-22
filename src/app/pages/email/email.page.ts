import { Component, OnInit } from '@angular/core';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';
import { Camera, CameraPlugin, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  subject = '';
  body = '';
  to = '';
  imageData = null;
  currentImage = null;

  constructor(private emailComposer: EmailComposer) { }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,

      source: CameraSource.Camera
    });
    this.imageData = image.base64String;
    this.currentImage = `data:image/jpg;base64,${image.base64String}`;

  }
  OpenEmailComposer() {
    
    const email: EmailComposerOptions = {
      

      to: this.to,
      attachments: [
        this.currentImage ? `base64:image.jpg//${this.imageData}` : null
      ],
      subject: this.subject,
      body: this.body,
      app: 'Gmail',
    }
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');

    this.emailComposer.open(email)

  }
  deleteImage() {
    this.currentImage = null;
  }

  ngOnInit() {

  }


}



