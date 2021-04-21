import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadPinComponent } from './components/upload-pin/upload-pin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
    UploadPinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatGridListModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'about', component: AboutComponent},
      {path: 'add', component: UploadPinComponent},

      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
