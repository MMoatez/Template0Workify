import { Component } from '@angular/core';

interface Plan {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  color: string;
}

type PaymentMethod = 'online' | 'bank-transfer' | 'cash-deposit' | null;

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 19,
    billingPeriod: 'month',
    description: 'Perfect for freelancers just starting out',
    color: 'blue',
    features: [
      'Apply to 10 projects per month',
      'Basic profile visibility',
      'Email support',
      'Access to job board',
      'Mobile app access',
    ],
    notIncluded: [
      'Featured profile',
      'Priority support',
      'Advanced analytics',
      'Direct client messaging',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 49,
    billingPeriod: 'month',
    description: 'Best for established freelancers',
    color: 'purple',
    popular: true,
    features: [
      'Unlimited project applications',
      'Featured profile placement',
      'Priority customer support',
      'Advanced profile analytics',
      'Direct client messaging',
      'Portfolio showcase',
      'Skill assessments',
      'Custom proposal templates',
    ],
    notIncluded: [
      'Dedicated account manager',
      'API access',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    billingPeriod: 'month',
    description: 'For agencies and professional teams',
    color: 'green',
    features: [
      'Everything in Professional',
      'Multiple team member accounts',
      'Dedicated account manager',
      'API access for integrations',
      'White-label solutions',
      'Custom branding',
      'Advanced reporting & analytics',
      'Priority project matching',
      '24/7 premium support',
      'Custom contract templates',
    ],
    notIncluded: [],
  },
];

@Component({
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
