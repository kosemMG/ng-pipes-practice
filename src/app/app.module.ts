import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalisePipe } from './pipes/capitalise.pipe';
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
import { HighlightDirective } from './directives/highlight.directive';
import { InvisibleDirective } from './directives/invisible.directive';
import { EnlargerDirective } from './directives/enlarger.directive';
import { CloudDirective } from './directives/cloud.directive';
import { LoggerDirective } from './directives/logger.directive';
import { LoggerValueDirective } from './directives/logger-value.directive';
import { BlurDirective } from './directives/blur.directive';

@NgModule({
  declarations: [
    AppComponent,
    CapitalisePipe,
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
    HighlightDirective,
    InvisibleDirective,
    EnlargerDirective,
    CloudDirective,
    LoggerDirective,
    LoggerValueDirective,
    BlurDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
