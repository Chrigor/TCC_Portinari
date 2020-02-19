import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  categoria: string = ""

  constructor(private categoriaService: CategoriaService, public poNotification: PoNotificationService) { }

  ngOnInit() {
  }

  cadastrarCategoria() {

    this.categoriaService.cadastrarCategoria(this.categoria).subscribe((res: any) => {
      console.log(res);
    });

    this.categoria = '';
    this.poNotification.success('Categoria cadastrada!');
  }

}
