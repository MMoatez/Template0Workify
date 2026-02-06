import { Component } from '@angular/core';
import { Freelancer, categories, freelancers } from './data/freelancer-mock-data';

@Component({
  standalone: false,
  selector: 'app-freelancer-profiles',
  templateUrl: './freelancer-profiles.component.html',
  styleUrls: ['./freelancer-profiles.component.scss']
})
export class FreelancerProfilesComponent {
  searchTerm: string = '';
  selectedCategory: string = 'All Categories';
  rateRange: [number, number] = [0, 150];
  sortBy: 'match' | 'rating' | 'rate' = 'match';
  
  categories = categories;
  freelancersWithScores: Freelancer[] = freelancers.map(freelancer => ({
    ...freelancer,
    matchScore: Math.floor(Math.random() * 30) + 70
  }));
  filteredFreelancers: Freelancer[] = [];

  constructor() {
    this.filterAndSortFreelancers();
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
    this.filterAndSortFreelancers();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterAndSortFreelancers();
  }

  onRateChange(value: number): void {
    this.rateRange = [this.rateRange[0], value];
    this.filterAndSortFreelancers();
  }

  onSortChange(value: string): void {
    this.sortBy = value as 'match' | 'rating' | 'rate';
    this.filterAndSortFreelancers();
  }

  filterAndSortFreelancers(): void {
    let filtered = this.freelancersWithScores.filter(freelancer => {
      const matchesSearch =
        freelancer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        freelancer.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        freelancer.bio.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        freelancer.skills.some(skill =>
          skill.toLowerCase().includes(this.searchTerm.toLowerCase())
        );

      const matchesCategory =
        this.selectedCategory === 'All Categories' ||
        freelancer.title.toLowerCase().includes(this.selectedCategory.toLowerCase());

      const matchesRate =
        freelancer.hourlyRate >= this.rateRange[0] && freelancer.hourlyRate <= this.rateRange[1];

      return matchesSearch && matchesCategory && matchesRate;
    });

    if (this.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'rate') {
      filtered.sort((a, b) => a.hourlyRate - b.hourlyRate);
    } else {
      filtered.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    }

    this.filteredFreelancers = filtered;
  }

  getSkillsToShow(skills: string[]): string[] {
    return skills.slice(0, 4);
  }

  getAdditionalSkillsCount(skills: string[]): number {
    return Math.max(0, skills.length - 4);
  }
}
