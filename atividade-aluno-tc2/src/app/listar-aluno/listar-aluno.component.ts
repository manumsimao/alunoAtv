/* 
	Nome: Emanoela Masqueti Simão
	RA: SC3005119
*/

import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
	selector: 'app-listar-aluno',
	templateUrl: './listar-aluno.component.html',
	styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
	aluno : Aluno = {
		nome: "Emanoela Masqueti Simão",
		dataIngresso: "06/02/2019" ,
		previsaoFormatura: "06/02/2022"
	}
	constructor() { }

	ngOnInit(): void {}
}
