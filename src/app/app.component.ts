import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-practice';
  outputStr: string = null;
  @ViewChild('input', {static: false}) inputEl: ElementRef;

  output() {
    this.outputStr = this.inputEl.nativeElement.value;
  }
}
