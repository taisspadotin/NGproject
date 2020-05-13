import { Component, OnInit } from '@angular/core';
import { Campos } from '../campos';

@Component({
  selector: 'app-campos',
  templateUrl: './campos.component.html',
  styleUrls: ['./campos.component.scss']
})

export class CamposComponent implements OnInit {
   campos: Campos = {
    id: 1,
    name: 'Windstorm',
    email: 'example@mail.com',
	  cpf: '111.111.111-1',
	  rg: '11.111.111.1',
	  nascimento: '00/00/0000'
  };
  
  constructor() { }

  ngOnInit(): void {

  }

}
