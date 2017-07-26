import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal'; 
import { ButtonsModule } from 'ngx-bootstrap/buttons';  

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  entryComponents: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
    // Ng2BootstrapModule.forRoot()
  ],
  providers: [
    // BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
