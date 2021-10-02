import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './contact/add/add.component';
import { DeleteComponent } from './contact/delete/delete.component';
import { EditComponent } from './contact/edit/edit.component';
import { ListComponent } from './contact/list/list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"contact/list",component:ListComponent,},
  {path:"contact/edit/:id",component:EditComponent,},
  {path:"contact/add",component:AddComponent},
  {path:"home",component:HomeComponent},
  {path:"contact/delete/:id",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
