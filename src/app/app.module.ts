import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupMentorComponent } from './signup-mentor/signup-mentor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    FooterComponent,
    routingComponents,
    PageNotFoundComponent,
    SignupUserComponent,
    SignupMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
