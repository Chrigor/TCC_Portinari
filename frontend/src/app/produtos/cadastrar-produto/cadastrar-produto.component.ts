import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../categoria/categoria.service';
import { ProdutosService } from '../produtos.service';
import { PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  categoria: string;
  categoriasCadastradas: string[];

  nome: string;
  descricao: string;
  preco: number;
  categoriaProduto: string;
  urlImagem: string;


  constructor(private categoriaService: CategoriaService, private produtosService: ProdutosService, public poNotification: PoNotificationService) {
  }

  ngOnInit() {
    this.getAllCategorias();
  }


  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((res: any) => {
     
      var options = res.categorias.map((elemento) => { return { value: elemento.toString().toLowerCase(), label: elemento.toString().toLowerCase() } });
      options.push({ value: '', label: 'Selecione um item'});
      this.categoriasCadastradas = options;
    });
  }

  cadastrarProduto() {

    let { nome, descricao, preco, categoriaProduto:categoria, urlImagem } = this;

    this.produtosService.cadastrarProduto({ nome, descricao, preco, categoria, urlImagem }).subscribe((res: any) => {
      console.log(res);
    })

    this.nome = ""
    this.descricao = ""
    this.preco = 0
    this.cadastrarProduto = () => ''
    this.urlImagem = ''
    this.poNotification.success('Produto Cadastrado!');
  }
}




