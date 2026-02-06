import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'freelancers', loadChildren: () => import('./modules/freelancer/freelancer.module').then(m => m.FreelancerModule) },
  { path: 'subscription', loadChildren: () => import('./modules/freelancer/freelancer.module').then(m => m.FreelancerModule) },
  { path: 'payment', loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule) },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
