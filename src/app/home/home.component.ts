import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  productList: any;

  constructor(
    private quoteService: QuoteService,
    private router: Router
    ) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });

    this.getProducts();
  }

  getProducts() {
    this.productList = this.quoteService.getProducts();
    console.log(this.productList);
  }

  getProductsDetail(index: any) {
    console.log(index);
    // this.router.navigate(['/product-detail', index]);
  }
}
