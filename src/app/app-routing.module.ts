import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'Home', component : FooterComponent},
  {path: '', redirectTo : '/User', pathMatch :"full"},
  {
    path: 'User',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
