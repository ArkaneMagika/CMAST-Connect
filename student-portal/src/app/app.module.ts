import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CmastConnectServiceService } from './services/cmast-connect-service.service';
import { LocalStorageService } from "./services/local-storage.service";

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageViewComponent } from './components/page-view/page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    PhotoGalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    EventsComponent,
    PageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CmastConnectServiceService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
