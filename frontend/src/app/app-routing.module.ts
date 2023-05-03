import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './produto/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './produto/criar-produto/criar-produto.component';
import { DeletarProdutoComponent } from './produto/deletar-produto/deletar-produto.component';


const routes: Routes = [
  {
    path: '',
    component: ListarProdutosComponent
  },
  {
    path: 'produtos/criar',
    component: CriarProdutoComponent
  },
  {
    path: 'produtos/deletar/:id',
    component: DeletarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
