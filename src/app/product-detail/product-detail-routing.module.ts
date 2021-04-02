import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  { path: '', component: ProductDetailComponent, data: { title: marker('Product Detail') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductDetailRoutingModule {}
