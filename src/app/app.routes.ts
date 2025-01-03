import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
    {path:'app',component:AppComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent}
];
