import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-layout-new-publication',
  templateUrl: './layout-new-publication.component.html',
  styleUrls: ['./layout-new-publication.component.scss'],
})
export class LayoutNewPublicationComponent implements OnInit {

  currentStep: number = 0;
  disabledNext: boolean = true;
  steps = [
    {
      path: '/publication/new/title',
      label: 'Cual es el título de tu publicación'
    },
    {
      path: '/publication/new/description',
      label: 'Describe tu publicación'
    },
    {
      path: '/publication/new/category',
      label: ''
    }
  ];


  constructor(private publicaionService: PublicationService, private router: Router) { }

  ngOnInit() {
    this.subscribeToStepChange();
  }

  subscribeToStepChange() {
    this.publicaionService.miEvento.subscribe((value: any) => {
      console.log('value', value);
      this.disabledNext = value.valid;
    });
  }

  nextStep() {
    this.currentStep++;
    this.router.navigate([this.steps[this.currentStep].path]);
  }

  previousStep() {
    this.currentStep--;
    this.router.navigate([this.steps[this.currentStep].path]);
  }



}
