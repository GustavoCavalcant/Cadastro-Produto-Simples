import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos!: Produto[];
  displayedColumns = ['id', 'name', 'price']

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.listar().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos)
    });
  }

}
