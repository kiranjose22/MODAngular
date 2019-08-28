import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupMentorComponent } from './signup-mentor/signup-mentor.component';
import { UsermenuComponent } from './usermenu/usermenu.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-user', component: SignupUserComponent },
  { path: 'signup-mentor', component: SignupMentorComponent },
  {
    path: 'user-menu', component: UsermenuComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, PageNotFoundComponent, SignupMentorComponent, SignupUserComponent, UsermenuComponent]