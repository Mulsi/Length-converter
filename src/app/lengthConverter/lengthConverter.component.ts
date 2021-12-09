
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  arr: any;
  input: number;
  firstValue: number;
  secondValue: number;
  selectedOption: boolean[];
  entryLabel: any;
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  ngOnInit() {
    this.arr = this.lengthOptions.map((option) => {
      return option;
    })
  }
  // onInput(value: number) {
  //   this.input = value;
  //   // console.log(event);
  //   this.firstValue = value * this.kmToMeter;
  //   console.log(this.firstValue);
  
  //   this.secondValue = value * this.meterToKm;
  //   console.log(this.secondValue);
  // }

  firstInput(value: number) {
    this.input = value;
    this.firstValue = value * 1000;
  }

  secondInput(value: number) {
    this.input = value;
    this.secondValue = value * 0.001;
  }

  converter(event: any) {
    console.log(event);
  }

}
