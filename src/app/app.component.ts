import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
}

@Component({
  selector: "Textbox",
  template: `
    <label>
    <input placeholder="Enter value" (input)="result.emit($event.target.value)">
    </label>
  `
})
export class Textbox {
  @Output() result = new EventEmitter();
}

@Component({
  selector: "DisplayText",
  template: `
    <p>Value: {{text}}</p>
  `
})
export class DisplayText {
  @Input() text: string;
}
