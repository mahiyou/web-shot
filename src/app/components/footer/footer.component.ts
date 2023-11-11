import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	mybreakpoint: number = 12;
	
	ngOnInit() {
		this.mybreakpoint = (window.innerWidth <= 700) ? 12 : 6;
	}
	onResize() {
		this.mybreakpoint = (window.innerWidth <= 700) ? 12 : 6;
	}
}
