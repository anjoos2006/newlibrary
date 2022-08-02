import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';
import { SignupComponent} from './signup/signup.component';
import { LoginComponent} from './login/login.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addbook',
    canActivate:[AuthGuard],
    component: AddbookComponent
  },
  {
    path: 'books',
    component: BooklistComponent
  },
  {
    path: 'users/signup',
    component: SignupComponent
  },
  {
    path: 'userlogin',
    component: LoginComponent
  },
  {
    path: 'update',
    component: UpdatebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
