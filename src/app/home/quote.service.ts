import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  productsArray = [
    {
      id: 1,
      name: "Women's Blouse",
      price: "$16.00",
      pic1: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
      pic2: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",
      size: "L, M, S",
      color: "Blue",
      sku: "10001"
    },
    {
      id: 2,
      name: "Men's Plain Tshirt",
      price: "$16.00",
      pic1: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg",
      pic2: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg",
      size: "L, M, S",
      color: "Blue",
      sku: "10002"
    },
    {
      id: 3,
      name: "Women's Plain Tshirt",
      price: "$16.00",
      pic1: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg",
      pic2: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg",
      size: "L, M, S",
      color: "Blue",
      sku: "10003"
    },
    {
      id: 4,
      name: "Mens Lining Tshirt",
      price: "$16.00",
      pic1: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg",
      pic2: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg",
      size: "L, M, S",
      color: "Blue",
      sku: "10004"
    }

  ];
  constructor(private httpClient: HttpClient) {}

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.httpClient.get(routes.quote(context)).pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not load joke :-('))
    );
  }

  getProducts() {
    return this.productsArray;
  }

  getProductDetails(id: any) {
    let product;
    this.productsArray.filter(el => { 
      if(el.id == id) {
        product = el;
      } 
    });
    return product;
  }
}
