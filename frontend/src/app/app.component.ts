import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly itensMenu = [
    { label: "Inicio", link: "/" },
    { label: 'Listar produtos', link: 'listarProdutos' },
    { label: 'Cadastrar Categoria', link: 'cadastrarCategoria' },
    { label: 'Cadastrar Produto', link: 'cadastrarProduto' }
  ]

  readonly menus: Array<PoMenuItem> = [
    { label: 'Inicio', link: '/' },
    { label: 'Listar Produtos', link: 'listarProdutos' },
    { label: 'Cadastrar Categoria', link: 'cadastrarCategoria' },
    { label: 'Cadastrar Produto', link: 'cadastrarProduto' }
  ];

}
