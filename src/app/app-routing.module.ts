import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmdComponent } from './customize/amd/amd.component';
import { IntelComponent } from './customize/intel/intel.component';
import { HomeComponent } from './home/home.component';
import { PcComponentsComponent } from './pc-components/pc-components.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product-list' ,component:ProductListComponent},
  {path:'cutomize_intel',component:IntelComponent},
  {path:'cutomize_amd',component:AmdComponent},
  {path:'addcomponent',component:PcComponentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
