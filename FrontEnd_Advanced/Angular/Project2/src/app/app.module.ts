import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { NgswitchdemoComponent } from './ngswitchdemo/ngswitchdemo.component';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';
import { StyledemoComponent } from './styledemo/styledemo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifdemoComponent,
    NgswitchdemoComponent,
    NgfordemoComponent,
    StyledemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
