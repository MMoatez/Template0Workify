import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerRoutingModule } from './freelancer-routing.module';
import { FreelancerProfilesComponent } from './freelancer-profiles.component';
import { FreelancerSubscriptionComponent } from './freelancer-subscription.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    FreelancerProfilesComponent,
    FreelancerSubscriptionComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FreelancerRoutingModule
  ]
})
export class FreelancerModule { }
