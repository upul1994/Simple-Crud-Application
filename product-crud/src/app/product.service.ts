import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient :HttpClient) { }

  getProducts(){
    return this.httpClient.get('http://localhost:3000/products');
  }

  addProduct(data:any){
    // const httpHeader =new HttpHeaders();
    // httpHeader.append('content-type' ,'application/json')
    return this.httpClient.post('http://localhost:3000/products',data);
  }


  removeProduct(id:number){
   return  this.httpClient.delete('http://localhost:3000/products/'+id);
  }

  showProduct(id:number){
   return  this.httpClient.get('http://localhost:3000/products/'+id);
  }


  editProduct(editData :object,id :number){
  return this.httpClient.put('http://localhost:3000/products/'+id,editData);
  }



}
