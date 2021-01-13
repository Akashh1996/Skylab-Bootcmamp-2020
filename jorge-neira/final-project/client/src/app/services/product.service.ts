import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IProductItem } from '../store/models/product-item-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor (private http: HttpClient) {}

	private mainEndpoint = 'http://192.168.1.134:5000' || 'http://localhost:5000'
  private productEndpoint = '/product';

  getProductById (id: string): Observable<IProductItem> {
    const url = `${this.mainEndpoint}${this.productEndpoint}/${id}`
    return this.http.get<IProductItem>(url)
  }

  getProductByQuery (query: any = null): Observable<IProductItem> {
    const url = query !== null
      ? `${this.mainEndpoint}${this.productEndpoint}/?${query}`
      : `${this.mainEndpoint}${this.productEndpoint}`
    return this.http.get<IProductItem>(url)
  }
}
