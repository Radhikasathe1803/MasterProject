import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmdComponent } from './customize/amd/amd.component';
import { IntelComponent } from './customize/intel/intel.component';
import { EcommerseComponent } from './ecommerse/ecommerse.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'ecommerse', component:EcommerseComponent},
  {path:'product-list' ,component:ProductListComponent},
  {path:'cutomize_intel',component:IntelComponent},
  {path:'cutomize_amd',component:AmdComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
