import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectsRoutingModule } from './projects-routing.module';
import { BrowseProjectsComponent } from './components/browse-projects/browse-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  declarations: [
    BrowseProjectsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
