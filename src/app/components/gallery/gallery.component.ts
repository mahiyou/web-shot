import { Component } from '@angular/core';
import { Image } from '../../interfaces/imgs'
import { ImageService } from "../../services/images.service"
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    imgs: Image[] = [];

    constructor(private imagService: ImageService) { }

    ngOnInit() {
        this.imagService.getImages('30').subscribe((items) => { this.imgs = items });
    }
}
