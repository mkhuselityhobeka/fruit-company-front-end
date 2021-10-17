import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Products{
  name:string
  code:string
  description:string
  price:string
  image:string
}

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  searchProductByName: string | undefined;
  page = 1;
  pageSize = 4;
  collectionSize!: number;
  currentRate = 8;
  products!: Products[];
  allProducts:Products[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Products[]>('./assets/data/products.json').subscribe((data: Products[]) => {
    this.collectionSize = data.length;
    this.products = data;
    this.allProducts = this.products
    });
  }

}
