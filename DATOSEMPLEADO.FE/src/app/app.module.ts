import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { ColaboradoresService } from './services/colaboradores.service';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ColaboradoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
