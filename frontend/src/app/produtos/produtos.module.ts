import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@portinari/portinari-ui';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { PoFieldModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [ListarProdutosComponent, CadastrarProdutoComponent],
  imports: [
    CommonModule,
    PoModule,
    PoFieldModule
  ],
  exports:[
    CadastrarProdutoComponent,
    ListarProdutosComponent
  ]
})
export class ProdutosModule { }
