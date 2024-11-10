import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AboutComponent } from './pages/about/about.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';

export const routes: Routes = [
    {
        path:"",
        component:SignInComponent
    },
    {
        path:"Account",
        component:UserAccountComponent
    },
    {
        path:"CustomerAccount",
        component:CustomerAccountComponent
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"cars",
        component:CarsComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"checkout",
        component:CheckoutComponent

    },
    {
        path:"contactus",
        component:ContactusComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"overview",
        component:OverviewComponent
    }

];

