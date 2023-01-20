import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn as fabLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() { }

  farEnvelope = farEnvelope;
  fabLinkedinIn = fabLinkedinIn;

  ngOnInit(): void {
  }

  openMailTo(): void {
    window.open('mailto:chelseajoy.rdg@gmail.com');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/chelsea-joy-de-guzman/')
  }

}
