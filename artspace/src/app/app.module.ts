import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { FollowsComponent } from './components/follows/follows.component';
import { SettingsComponent } from './components/settings/settings.component';

//I moved routes to app-routing.module.ts - Shayakhmet

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
    UserComponent,
    FollowsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
