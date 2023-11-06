import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        
    ],
    imports: [
        MatIconModule,
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatGridListModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
