import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  categoria: string = ""

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  cadastrarCategoria() {

    this.categoriaService.cadastrarCategoria(this.categoria).subscribe((res: any) => {
      console.log(res);
    });

  }

}
