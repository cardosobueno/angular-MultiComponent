import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-andre-danillo-tarcisio-random-component',
  templateUrl: './andre-danillo-tarcisio-random-component.component.html',
  styleUrls: ['./andre-danillo-tarcisio-random-component.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AndreDanilloTarcisioRandomComponentComponent implements OnInit {
  n: number = 7;

  constructor() {}

  ngOnInit() {}

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }
}
