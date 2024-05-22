import { Routes } from '@angular/router';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [

{
    path:"", 
    redirectTo:"home",
    pathMatch:"full"
},

{
    path:"home",
    component : ProductListingComponent,
},
{
    path:"checkout",
    component : CheckoutComponent,
},
{
    path:"**",
    component : ProductListingComponent,
}


];
