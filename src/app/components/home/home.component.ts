import { Component } from '@angular/core';
import {images, imgs, addImg} from '../../mocks-imgs'
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	search: string = 'https://www.w3.org/';
	codeText: string[] = ['<img src="http://web-shot.ir/capture?url=https://www.google.com/">', '<img src="http://web-shot.ir/capture?url=https://www.google.com/&width=100&crop=600">'];
	imgs: imgs[] = images;
	onSubmit(search: string) {
		let pageUrl: string = ''
		if(search.indexOf('&') > -1){
			pageUrl = search.substring(0, search.indexOf('&'))
		}else{
			pageUrl = search
		}
		addImg(search,pageUrl);
	}
}
