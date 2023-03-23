import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-andre-header-component',
  templateUrl: './andre-header-component.component.html',
  standalone: true,
  styleUrls: ['./andre-header-component.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AndreHeaderComponentComponent implements OnInit {
  name: string = 'André';

  constructor() {}

  ngOnInit() {}
}
