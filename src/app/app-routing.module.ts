import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/pages/cart/cart.component';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { MainComponent } from './components/pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
