import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerProfilesComponent } from './freelancer-profiles.component';
import { FreelancerSubscriptionComponent } from './freelancer-subscription.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'freelancers',
        component: FreelancerProfilesComponent
      },
      {
        path: 'subscription',
        component: FreelancerSubscriptionComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }
