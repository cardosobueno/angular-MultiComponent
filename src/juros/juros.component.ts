import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-juros',
  standalone: true,
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
  imports: [FormsModule, CommonModule],
})
export class JUROSComponent implements OnInit {
  taxa: number = 12;
  mes: number = 5;
  valor: number = 600;
  result: number = 0;

  constructor() {}

  calcula() {
    this.result = this.valor * (this.taxa / 100) * this.mes;

    console.log(this.result);
    console.log(this.result + this.valor);
  }

  ngOnInit() {}
}
