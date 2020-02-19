import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sampleItems: Array<any> = [
    {
      title: 'Roupas em promoção!',
      description: 'Promoções de até 90%. E ai, vai ficar de fora dessa?',
      date: 'December 25, 2019',
      author: 'Pedrinho Jr.',
      link: 'https://www.kanui.com.br/special-price/roupas-masculinas/camisetas/',
      imagem: 'https://cdn-cv.r4you.co/wp-content/uploads/2013/08/iStock-511479480.jpg'
    },
    {
      title: 'Chegaram novidades!',
      description: 'Tênis das melhores marcas, vocês encontram aqui, na mixlar!',
      date: 'August 11, 2020',
      author: 'Renato Gaúcho',
      link: 'https://www.nike.com.br/Produto/Tenis-Nike-Air-Max-200-Masculino/153-169-172-185369',
      imagem: 'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      title: 'Promoções de inverno!',
      description: 'Produtos com até 10% de desconto com pagamento avista',
      date: 'January 22, 2020',
      author: 'Gabriel Souza',
      link: 'https://www.riachuelo.com.br/primaveraverao',
      imagem: 'https://www.itl.cat/pngfile/big/61-610952_ps-fmea-calado-pernas-sapato-cu-tnis-listras.jpg'
    },
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }

  constructor() { }

  ngOnInit() {
  }

}
