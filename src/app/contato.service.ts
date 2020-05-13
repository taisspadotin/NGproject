import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

	contatosUrl = "http://localhost:5000/mostrar";
  constructor() { }
}
