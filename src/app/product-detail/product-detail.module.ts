import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ProductDetailRoutingModule],
  declarations: [ProductDetailComponent],
})
export class ProductDetailModule {}
