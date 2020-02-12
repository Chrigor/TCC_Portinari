import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListarProdutosComponent} from './produtos/listar-produtos/listar-produtos.component';
import {CadastrarProdutoComponent} from './produtos/cadastrar-produto/cadastrar-produto.component';
import {CadastrarCategoriaComponent} from './categoria/cadastrar-categoria/cadastrar-categoria.component';

const routes: Routes = [
  { path: '', component: ListarProdutosComponent },
  { path: 'listarProdutos', component: ListarProdutosComponent },
  { path: 'cadastrarCategoria', component: CadastrarCategoriaComponent },
  { path: 'cadastrarProduto', component: CadastrarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
