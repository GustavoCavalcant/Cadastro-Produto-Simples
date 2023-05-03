import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../../components/produtos.service';
import { Produto } from 'src/app/components/produto.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos!: Produto[];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit() {
    this.produtosService.listar().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos)
    });
  }

  navegarParaCriarNovoProduto(): void {
    this.router.navigate(['/produtos/criar'])
  }

}
