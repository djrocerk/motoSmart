import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-title-publication',
  templateUrl: './title-publication.component.html',
  styleUrls: ['./title-publication.component.scss'],
})
export class TitlePublicationComponent  implements OnInit {

  nombre: string = '';

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
