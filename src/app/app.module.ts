import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddflightComponent } from './addflight/addflight.component'
import { FormsModule } from '@angular/forms';
import { ViewflightComponent } from './viewflight/viewflight.component';
import{HttpClientModule} from '@angular/common/http';
import { SearchflightComponent } from './searchflight/searchflight.component';
const appRoutes:Routes=[
  {
    path:"",component:AddflightComponent
  },
  {
    path:"viewflight",component:ViewflightComponent
  },
  {
    path:"searchflight",component:SearchflightComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddflightComponent,
    ViewflightComponent,
    SearchflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
