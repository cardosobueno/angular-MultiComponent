import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { JUROSComponent } from './juros/juros.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AndreHeaderComponentComponent } from './andre-header-component/andre-header-component.component';
import { AndreDanilloTarcisioTimerComponentComponent } from './andre-danillo-tarcisio-timer-component/andre-danillo-tarcisio-timer-component.component';
import { AndreDanilloTarcisioRandomComponentComponent } from './andre-danillo-tarcisio-random-component/andre-danillo-tarcisio-random-component.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    AndreHeaderComponentComponent,
    JUROSComponent,
    FormsModule,
    ReactiveFormsModule,
    AndreDanilloTarcisioTimerComponentComponent,
    AndreDanilloTarcisioRandomComponentComponent,
  ],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
   
    <app-andre-header-component>
    </app-andre-header-component>
    
    <app-andre-danillo-tarcisio-timer-component>
    </app-andre-danillo-tarcisio-timer-component>

    <app-juros>
    </app-juros>

    <app-andre-danillo-tarcisio-random-component>
    </app-andre-danillo-tarcisio-random-component>


  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
