import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WordComponent } from './word/word.component';
import { WordCaptionComponent } from './word-caption/word-caption.component';
import { MessagesComponent } from './messages/messages.component';
import { UploadComponent } from './upload/upload.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { GoogleSigninComponent } from './google-signin/google-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordCaptionComponent,
    MessagesComponent,
    UploadComponent,
    FileSelectDirective,
    GoogleSigninComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
