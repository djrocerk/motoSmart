import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.scss'],
})
export class NewPublicationComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  nextStep() {
    this.router.navigate(['/publication/new/title']);
  }

}
