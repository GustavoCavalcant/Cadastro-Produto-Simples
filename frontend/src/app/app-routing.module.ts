import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './produto/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './produto/criar-produto/criar-produto.component';


const routes: Routes = [
  {
    path: '',
    component: ListarProdutosComponent
  },
  {
    path: 'produtos/criar',
    component: CriarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
