import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  professor: string = '- Sotrate';
  turma: string = '- IDEV3';
  alunos: any[] = [
    { nome: 'Manu', idade: 17 },
    { nome: 'Boas', idade: 16 },
    { nome: 'Zanga', idade: 17 }
  ];

  novoNome: string = '';
  novaIdade: number | null = null;

  adicionarAluno() {
    const nome = this.novoNome;
    const idadeNum = Number(this.novaIdade);
    if (nome && idadeNum) {
      this.alunos.push({ nome, idade: idadeNum });
      this.novoNome = '';
      this.novaIdade = null;
    }
  }

  removerAluno(index: number): void {
    this.alunos.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {
    console.log('Ola mundo!');
  }
}