import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Image } from '../../interfaces/imgs'
import { Observable } from "rxjs"
import { ImageService } from 'src/app/services/images.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	search: string = 'https://www.w3.org/';
	codeText: string[] = ['<img src="http://web-shot.ir/capture?url=https://www.google.com/">', '<img src="http://web-shot.ir/capture?url=https://www.google.com/&width=100&crop=600">'];
	imgs: Image[] = [];
	pageUrl: string = '';

	constructor(private imagService: ImageService) { }

	ngOnInit() {
		this.imagService.getImages('4').subscribe((items) => {
			this.imgs = items
			// console.log(items)
			// console.log('shhh')
		});
	}

	onSubmit(search: string) {
		
		if (search.indexOf('&') > -1) {
			this.pageUrl = search.substring(0, search.indexOf('&'))
		} else {
			this.pageUrl = search
		}
		this.imagService.capture(this.pageUrl, { width: 20 }).subscribe((result) => {
			this.createImageFromBlob(result)
			this.ngOnInit();
		})
	}
	imageToShow: any;

	createImageFromBlob(image: Blob) {
		let reader = new FileReader();
		reader.addEventListener("load", () => {
			this.imageToShow = reader.result;
		}, false);

		if (image) {
			reader.readAsDataURL(image);
		}
	}
}
