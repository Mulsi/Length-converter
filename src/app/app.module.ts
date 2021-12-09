
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LengthConverter } from './lengthConverter/lengthConverter.component';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { ConverterPipe } from './converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LengthConverter,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot([
      { path:'', component: LengthConverter }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
