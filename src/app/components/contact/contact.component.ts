import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    mybreakpoint: number = 12;

    ngOnInit() {
        this.mybreakpoint = (window.innerWidth <= 700) ? 12 : 6;
    }
    onResize() {
        this.mybreakpoint = (window.innerWidth <= 700) ? 12 : 6;
    }
}
