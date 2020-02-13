import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  api = `${environment.apiEndPoint}/categorias`;

  constructor(private http: HttpClient) { }

  getAllCategorias() {
    return this.http.get(`${this.api}`);
  }

  cadastrarCategoria(categoria: string) {
    return this.http.post(`${this.api}`, { categoria });
  }
}
