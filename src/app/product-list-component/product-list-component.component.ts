import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListService } from '../services/product-list.service';

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

    products: Array<any>
    totalRecords: Number
    page: Number=1

  constructor(private productListService: ProductListService) { 
     this.products = new Array<any>()
     this.totalRecords = 0
  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
      this.productListService.getProductList().subscribe((data:any) => {
               console.log(data);
               this.products = data.results.length;
      });
   }
}
