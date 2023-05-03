import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/components/produtos.service';
import { Produto } from 'src/app/components/produto.model';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css'],
})
export class DeletarProdutoComponent implements OnInit {
  produto!: Produto;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtosService.lerPorId(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  deletarProduto(): void {
    this.produtosService.excluir(this.produto.id).subscribe(() => {
      this.produtosService.mostrarMensagem('Produto excluído com sucesso!');
      this.router.navigate(['']);
    })
  }
}
