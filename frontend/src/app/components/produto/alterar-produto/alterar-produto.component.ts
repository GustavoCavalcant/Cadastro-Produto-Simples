import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto.model';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css'],
})
export class AlterarProdutoComponent implements OnInit {
  produto!: Produto;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtosService.lerPorId(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  alterarProduto(): void {
    this.produtosService.alterar(this.produto).subscribe(() => {
      this.produtosService.mostrarMensagem('Produto alterado com sucesso!!!')
      this.router.navigate(['']);
    })
  }
}
