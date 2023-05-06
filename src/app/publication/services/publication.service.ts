import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  title: string = '';
  miEvento = new EventEmitter<any>();

  constructor() { }


  setTitle(title: string) {
    this.title = title;
  }

  titleValid() {
    if (this.title.length > 5 && this.title.length <= 60) {
      this.miEvento.emit({valid: false, nextStep: 2, preiusStep: 0});
      return;
    }
    this.miEvento.emit({valid: true, nextStep: 2, preiusStep: 0});
  }

}
