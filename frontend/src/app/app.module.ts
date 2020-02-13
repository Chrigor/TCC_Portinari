import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';

import { ProdutosModule } from './produtos/produtos.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PoNavbarModule } from '@portinari/portinari-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PoModalModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    BrowserAnimationsModule,
    PoNavbarModule,
    ProdutosModule,
    CategoriaModule,
    PoModalModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
