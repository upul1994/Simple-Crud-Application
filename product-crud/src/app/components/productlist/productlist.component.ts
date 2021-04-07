import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productService :ProductService ) { }

  productList:any;
  msg =false;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result=>{
      this.productList =result;

    })


  }

  deleteProduct(productID: number){
    this.productService.removeProduct(productID).subscribe(result=>{
         this.msg =true;
    })
  }


}
