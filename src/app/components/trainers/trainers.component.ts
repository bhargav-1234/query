import { Component, OnInit } from "@angular/core";
import { TrainerService } from "./trainer.service";

@Component({
  selector: "app-trainers",
  templateUrl: "./trainers.component.html",
  styleUrls: ["./trainers.component.css"]
})
export class TrainersComponent implements OnInit {
  content: any[];
  constructor(private _trainerServices: TrainerService) {
    this.content = _trainerServices.getContent();
  }

  ngOnInit() {}
}
