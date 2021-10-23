import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Products{
  name:string;
  code:string;
  description:string;
  price:string;
  image:string;
}

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  searchProduct: string
  page = 1;
  pageSize = 4;
  collectionSize: number;
  currentRate = 8;
  products: Products[];
  allProducts:Products[] ;

  constructor(private http: HttpClient) { 
    this.searchProduct = "";
    this.collectionSize = 0;
    this.products = [];
    this.allProducts = [];
  }

  ngOnInit(): void {
    this.http.get<Products[]>('./assets/data/products.json').subscribe((data: Products[]) => {
    this.collectionSize = data.length;
    console.log("collectionSize is " + this.collectionSize);
    this.products = data;
    console.log("products is " + this.products);
    this.allProducts = this.products
    });
  }
  
  search(value : string){
       this.products = this.allProducts?.filter((val) =>
       val.name.toLowerCase().includes(value));
       this.collectionSize = this.products.length;

  }

}
