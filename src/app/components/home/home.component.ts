import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	search: string = 'https://www.w3.org/';
	codeText: string[] = ['<img src="http://web-shot.ir/capture?url=https://www.google.com/">', '<img src="http://web-shot.ir/capture?url=https://www.google.com/&width=100&crop=600">'];
	onSubmit() {
		console.log('search')
	}
}
