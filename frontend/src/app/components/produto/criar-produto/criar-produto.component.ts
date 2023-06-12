import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/components/produto.model';
import { ProdutosService } from 'src/app/components/produtos.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  produto: Produto = {
    id: 0 ,
    name: '',
    price: ''
  }

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  criarProduto(): void {
    this.produtosService.criar(this.produto).subscribe(() => {
      this.produtosService.mostrarMensagem('Produto criado com sucesso!!!')
      this.router.navigate([''])
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }
}
