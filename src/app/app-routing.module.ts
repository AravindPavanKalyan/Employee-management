import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnitTestingDemoComponent } from './unit-testing-demo/components/unit-testing-demo/unit-testing-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { animation: 'homePage', title: 'Home'} },
  { path: 'concepts', component: ConceptsComponent, canActivate: [AuthGuard], data: { animation: 'conceptsPage', title: 'Concepts' } },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard], data: { animation: 'aboutPage', title: 'About Us' } },
  {
    path: 'unit-testing',
    component: UnitTestingDemoComponent,
    canActivate: [AuthGuard], data: { animation: 'unitTestingPage', title: 'Unit testing' }
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: { title: 'Page not found' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
