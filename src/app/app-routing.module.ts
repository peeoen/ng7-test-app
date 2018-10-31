import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'virtual-scroll',
    pathMatch: 'full'
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollComponent
  },
  {
    path: 'drag-drop',
    component: DragDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
