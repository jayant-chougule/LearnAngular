import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyPipePipe } from './my-pipe.pipe';
import { SampleComponent } from './sample.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyPipePipe, SampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
