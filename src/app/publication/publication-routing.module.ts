import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitlePublicationComponent } from './title-publication/title-publication.component';
import { LayoutNewPublicationComponent } from './layout-new-publication/layout-new-publication.component';
import { DescriptionPublicationComponent } from './description-publication/description-publication.component';
import { CategoryPublicationComponent } from './category-publication/category-publication.component';
import { NewPublicationComponent } from './new-publication/new-publication.component';

const routes: Routes = [
  {
    path: 'info',
    component: NewPublicationComponent,
  },
  {
    path: 'new',
    component: LayoutNewPublicationComponent,
    children: [
      {
        path: 'title',
        component: TitlePublicationComponent
      },
      {
        path: 'description',
        component: DescriptionPublicationComponent
      },
      {
        path: 'category',
        component: CategoryPublicationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
