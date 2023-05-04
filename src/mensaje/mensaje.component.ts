import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  standalone: true,
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input() name="Sebastian"
  constructor() { }

  ngOnInit() {
  }

}