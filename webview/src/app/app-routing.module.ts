import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalDownloadComponent } from './components/local-download/local-download.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'total', component: LocalDownloadComponent },
    { path: 'running', component: LocalDownloadComponent },
    { path: 'completed', component: LocalDownloadComponent },
    { path: '', redirectTo: '/total', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
