import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { HomeComponent } from './home/home.component';
import { UnitTestingDemoComponent } from './unit-testing-demo/components/unit-testing-demo/unit-testing-demo.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'concepts', component : ConceptsComponent},
  {path: 'about', component : AboutComponent},
  {path: 'unit-testing', component : UnitTestingDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
