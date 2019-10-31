import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PostsComponent } from "./components/posts/posts.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EventsComponent } from './components/events/events.component';
import { PageViewComponent } from "./components/page-view/page-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'events', component: EventsComponent, children: 
    [ { path:'e/:slug', component: PageViewComponent } ] 
  },
  { path: 'post', component: PostsComponent, children:
    [ { path: 'p/:slug', component: PageViewComponent } ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
