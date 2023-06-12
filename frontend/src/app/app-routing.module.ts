import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { DeletarProdutoComponent } from './components/produto/deletar-produto/deletar-produto.component';
import { AlterarProdutoComponent } from './components/produto/alterar-produto/alterar-produto.component';


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
  },
  {
    path: 'produtos/alterar/:id',
    component: AlterarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
