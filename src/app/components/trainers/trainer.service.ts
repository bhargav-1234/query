import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TrainerService {
  _trainerServices: any[];

  constructor() {}
  getContent() {
    return [
      {
        img: "../../../assets/img/dogger_img_1.png",
        name: "Bhargav",
        para:
          " Lorem Ipsum is simply dummy text of the printing and typesetting"
      },
      {
        img: "../../../assets/img/dogger_img_1.png",
        name: "Pavan",
        para:
          " Lorem Ipsum is simply dummy text of the printing and typesetting"
      },
      {
        img: "../../../assets/img/dogger_img_1.png",
        name: "Mithali raj",
        para:
          " Lorem Ipsum is simply dummy text of the printing and typesetting"
      }
    ];
  }
}
