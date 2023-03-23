import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-andre-danillo-tarcisio-timer-component',
  templateUrl: './andre-danillo-tarcisio-timer-component.component.html',
  styleUrls: ['./andre-danillo-tarcisio-timer-component.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AndreDanilloTarcisioTimerComponentComponent implements OnInit {
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);
  counter: number = 0;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }
  getMinutes() {
    return Math.trunc(this.counter / 60);
  }

  constructor() {}

  ngOnInit() {}
}
