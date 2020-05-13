import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamposComponent } from './campos/campos.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ContatoService } from './contato.service';

@NgModule({
  declarations: [
    AppComponent,
    CamposComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
