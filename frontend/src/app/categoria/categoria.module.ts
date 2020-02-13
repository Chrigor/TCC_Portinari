import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { PoFieldModule } from '@portinari/portinari-ui';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule, FormControl } from '@angular/forms';


@NgModule({
  declarations: [CadastrarCategoriaComponent],
  imports: [
    CommonModule,
    PoModule,
    PoFieldModule,
    FormsModule,
  ]
})
export class CategoriaModule { 
}
