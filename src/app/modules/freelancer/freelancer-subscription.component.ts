import { Component } from '@angular/core';
import { Plan, plans } from './data/subscription-mock-data';

type PaymentMethod = 'online' | 'bank-transfer' | 'cash-deposit' | null;

@Component({
  standalone: false,
  selector: 'app-freelancer-subscription',
  templateUrl: './freelancer-subscription.component.html',
  styleUrls: ['./freelancer-subscription.component.scss']
})
export class FreelancerSubscriptionComponent {
  plans = plans;
  selectedPlan: Plan | null = null;
  paymentMethod: PaymentMethod = null;
  showPaymentModal = false;

  handleSelectPlan(plan: Plan): void {
    this.selectedPlan = plan;
    this.showPaymentModal = true;
    this.paymentMethod = null;
  }

  handleCloseModal(): void {
    this.showPaymentModal = false;
    this.paymentMethod = null;
  }

  selectPaymentMethod(method: PaymentMethod): void {
    this.paymentMethod = method;
  }

  backToPaymentMethods(): void {
    this.paymentMethod = null;
  }
}
