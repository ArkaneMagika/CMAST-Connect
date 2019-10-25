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
import { BlogComponent } from './components/blog/blog.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    CommentComponent,
    PostsComponent,
    PhotoGalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent
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
