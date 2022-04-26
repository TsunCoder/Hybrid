import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/camera'
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    var imgUrl = image.webPath;
    console.log('Picture is taken oK');
  }

}
