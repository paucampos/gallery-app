import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  photos: string[]= [];

  constructor(private photoService: PhotosService) {
    this.photos = this.photoService.photos;
  }

  ngOnInit() {}

  async takePhoto() {
    await this.photoService.takePicture();
  }
}
