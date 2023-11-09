import { Component } from '@angular/core';
import {images, imgs} from '../../mocks-imgs'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imgs: imgs[] = images;
}
