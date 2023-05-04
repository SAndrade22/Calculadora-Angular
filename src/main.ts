import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  name = ' Mi Calculadora básica';
  a = 0;
  b = 0;
  c = 0;
  operacion = '';

  clear() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.operacion = '';
  }

  calcular() {
    switch (this.operacion) {
      case '+':
        this.c = this.a + this.b;
        break;
      case '-':
        this.c = this.a - this.b;
        break;
      case '*':
        this.c = this.a * this.b;
        break;
      case '/':
        this.c = this.a / this.b;
        break;
    }
  }
}

bootstrapApplication(App);