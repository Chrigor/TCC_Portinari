import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  title: string;
  products: any[];

  // {
  //   "nome": "coca cola",
  //   "descricao": "cocaaa ",
  //   "preco": 8,
  //   "categoria": "refrigerantes",
  //   "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
  //  }

  constructor() {
    this.title = "Listar";
    this.products = [{
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    },
    {
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    },
    {
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    },
    {
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    },
    {
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    },
    {
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    },
    {
      "nome": "coca cola",
      "descricao": "cocaaa ",
      "preco": 8,
      "categoria": "refrigerantes",
      "urlImagem": "https://i.ytimg.com/vi/d5X2rJNhwxk/hqdefault.jpg"
    }]
  }

  ngOnInit() {
  }

}
