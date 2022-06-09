import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel'
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
