import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@portinari/portinari-ui';
import { ProdutosService } from '../produtos.service';
import { CategoriaService } from '../../categoria/categoria.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  title: string;
  products: any[];
  categorias: any[];
  produtoAtual: Object;

  constructor(private produtosService: ProdutosService, private categoriaService: CategoriaService) {
    this.title = "Listar";
    this.categorias = [
      { value: 'Todos', label: 'Todos' },
      { value: 'refrigerantes', label: 'Refrigerantes' },
      { value: 'Comida', label: 'Comida' },
      { value: 'Roupas', label: 'Roupas' },
      { value: 'Tenis', label: 'Tenis' },
    ],

      this.produtoAtual = {
        "nome": "",
        "descricao": "",
        "preco": "",
        "categoria": "",
        "urlImagem": "",
        "imagensProduto": []
      };
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategorias();
  }

  setProduto(produto, modal) {
    this.produtoAtual = produto;


    console.dir(modal);
    modal.open();

  }

  chamouFiltro(event) {
    // event é o value do radio selecionado
    event = event.toString().toLowerCase();
    if (event == "todos") {
      this.getAllProducts();
    } else {
      this.produtosService.getProdutosCategoria(event).subscribe((res: any) => {
        console.log(res);
        this.products = res.data;
      });
    }
  }

  getAllProducts() {
    this.produtosService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res.data;
    });
  }


  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((res: any) => {
      var options = res.categorias.map((elemento) => { return {value: elemento, label:elemento} });
      this.categorias = options;
    });
  }
}
