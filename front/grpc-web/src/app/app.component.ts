import {Component} from '@angular/core';
import {CalculatorClient} from "../proto/calculator.pbsc";
import {Request, Response} from "../proto/calculator.pb";
import {ClearResponse, Event, GetAllResponse, HistoryRequest} from "../proto/history.pb";
import {HistoryClient} from "../proto/history.pbsc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grpc';

  public a = 0

  public b = 0

  public result = 0

  public operation = Operations.add;

  isHistoryPage = false

  events: Event[] = []

  constructor(private calculatorClient: CalculatorClient, private historyClient: HistoryClient) {
  }


  getResult() {
    (this.operation == Operations.sub) ?
      this.sub(this.a, this.b) :
      this.add(this.a, this.b)
  }

  add(a: number, b: number) {
    const req = new Request()
    req.a = a
    req.b = b
    this.calculatorClient.add(req).subscribe(
      (res: Response)  => this.result = res.result,
      error => console.dir(error)
    )
  }

  sub(a: number, b: number) {
    const req = new Request()
    req.a = a
    req.b = b
    this.calculatorClient.sub(req).subscribe(
      (res: Response)  => this.result = res.result,
      error => console.dir(error)
    )
  }

  inputA(event: any) {
    const aVal = Number.parseInt(event.target.value)
    this.a = isNaN(aVal) ? 0 : aVal
    event.target.value = this.a
  }

  inputB(event: any) {
    const bVal = Number.parseInt(event.target.value)
    this.b = isNaN(bVal) ? 0 : bVal
    event.target.value = this.b
  }

  reset() {
    this.a = 0
    this.b = 0
    this.result = 0
  }

  clearEvents() {
    const req = new HistoryRequest()
    this.historyClient.clear(req).subscribe(
      (res: ClearResponse) => {
        alert("Remove " + res.count + " elements")
        this.updateEvents()
      },
      error => console.dir(error)
    )
  }

  toHistory() {
    this.updateEvents()
    this.isHistoryPage = true
  }

  updateEvents() {
    const req = new HistoryRequest()
    this.historyClient.getAll(req).subscribe(
      (res: GetAllResponse) => this.events = res.events,
      error => console.dir(error)
    )
  }

  toCalculator() {
    this.isHistoryPage = false;
  }

  formatDate(date: string): string {
    return date.split(".")[0]
  }

}

enum Operations {
  add = "add",
  sub = "sub"
}

