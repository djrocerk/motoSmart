import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { IonHeader, IonToolbar, IonicModule } from '@ionic/angular';
import { LayoutNewPublicationComponent } from './layout-new-publication/layout-new-publication.component';
import { TitlePublicationComponent } from './title-publication/title-publication.component';
import { FormsModule } from '@angular/forms';
import { CategoryPublicationComponent } from './category-publication/category-publication.component';
import { DescriptionPublicationComponent } from './description-publication/description-publication.component';
import { NewPublicationComponent } from './new-publication/new-publication.component';


@NgModule({
  declarations: [LayoutNewPublicationComponent, TitlePublicationComponent, CategoryPublicationComponent, DescriptionPublicationComponent, NewPublicationComponent],
  imports: [
    CommonModule,
    PublicationRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class PublicationModule { }
