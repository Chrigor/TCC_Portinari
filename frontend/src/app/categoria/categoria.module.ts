import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { PoFieldModule } from '@portinari/portinari-ui';
import { PoModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [CadastrarCategoriaComponent],
  imports: [
    CommonModule,
    PoModule,
    PoFieldModule
  ]
})
export class CategoriaModule { }
