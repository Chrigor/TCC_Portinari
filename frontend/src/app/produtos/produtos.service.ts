import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  api = `${environment.apiEndPoint}/products`;

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(`${this.api}`);
  }

  getProdutosCategoria(categoria:string){
    return this.http.get(`${this.api}/categoria/${categoria}`);
  }
}
