import { Component } from '@angular/core';
import { Image } from '../../interfaces/imgs'
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
	loading: boolean = false;
	
	constructor(private imagService: ImageService) { }

	ngOnInit() {
		this.imagService.getImages('3').subscribe((items) => {
			this.imgs = items
			// console.log(items)
			// console.log('shhh')
		});
	}

	onSubmit(search: string) {
		this.loading = true;
		if (search.indexOf('&') > -1) {
			this.pageUrl = search.substring(0, search.indexOf('&'))
		} else {
			this.pageUrl = search
		}
		this.imagService.capture(this.pageUrl, {}).subscribe((result) => {
			console.log('gggg'+result)
			this.createImageFromBlob(result)
		})
	}
	imagesToShow: any[] = [];

	createImageFromBlob(image: Blob) {
		let reader = new FileReader();
		reader.addEventListener("load", () => {
			this.imagesToShow.unshift(reader.result);
			this.loading = false;
		}, false);

		if (image) {
			reader.readAsDataURL(image);
		}
	}
}
