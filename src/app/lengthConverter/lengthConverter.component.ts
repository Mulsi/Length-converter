
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
  value: number;
  convertedValue: number;
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

  inputValue() {
    
  }

  converter(event: any, input:number) {
    this.value = input;
    switch (event) {
      case "Kilometre" && "Metre":
        console.log("Km and m was selected");

        break;
      case "Kilometre" && "Centimetre": 
        console.log('Km and cm was selected');
        break;
      case "Metre" && "Centimetre": 
        console.log("m and cm was selected");
        break;
    }
  }

}
