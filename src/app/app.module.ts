import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
