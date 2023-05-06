import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-description-publication',
  templateUrl: './description-publication.component.html',
  styleUrls: ['./description-publication.component.scss'],
})
export class DescriptionPublicationComponent  implements OnInit {

  description: string = '';

  constructor(private publicaionService: PublicationService) { }

  ngOnInit() {}



  customCounterFormatter(inputLength: number, maxLength: number) {
    return `Puedes incluir ${maxLength} carácteres en este título  ${ inputLength} / ${maxLength}`;
  }

  cambioTexto(nombre: string) {
    this.publicaionService.setTitle(nombre);
    this.publicaionService.titleValid();
  }

}
