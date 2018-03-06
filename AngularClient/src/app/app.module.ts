import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PagerService } from './services/index';


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { BlogpageComponent } from './blogpage/blogpage.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    BlogpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
