import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { LibModule } from './modules/lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [AppComponent, ContactFormComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
