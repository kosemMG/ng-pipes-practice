import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';
import { UncapitalisePipe } from './pipes/uncapitalise.pipe';
import { ToLowercasePipe } from './pipes/to-lowercase.pipe';
import { SayHelloPipe } from './pipes/say-hello.pipe';
import { IncrementPipe } from './pipes/increment.pipe';
import { DecrementPipe } from './pipes/decrement.pipe';
import { FirstNPipe } from './pipes/first-n.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { MaxValPipe } from './pipes/max-val.pipe';
import { MinValPipe } from './pipes/min-val.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToUppercasePipe,
    UncapitalisePipe,
    ToLowercasePipe,
    SayHelloPipe,
    IncrementPipe,
    DecrementPipe,
    FirstNPipe,
    FilterPipe,
    MaxValPipe,
    MinValPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
