import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CvExtendedComponent } from './cv-extended/cv-extended.component';
import { CvExtendedPlusComponent } from './cv-extended-plus/cv-extended-plus.component';
import { CvAdsComponent } from './cv-ads/cv-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvExtendedComponent,
    CvExtendedPlusComponent,
    CvAdsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
