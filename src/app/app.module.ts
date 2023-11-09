import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './components/footer/footer.component';
import { DocsComponent } from './components/docs/docs.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        DocsComponent,
        GalleryComponent,
        
    ],
    imports: [
        MatIconModule,
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatTableModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
