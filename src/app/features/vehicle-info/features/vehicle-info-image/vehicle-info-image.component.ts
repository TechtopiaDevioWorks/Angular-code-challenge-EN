import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-vehicle-info-image',
  templateUrl: './vehicle-info-image.component.html',
  styleUrls: ['./vehicle-info-image.component.css'],
})
export class VehicleInfoImageComponent implements OnChanges {
  @Input() vehType: string | null = 'auto';
  imageUrl = './assets/auto.jpg';
  imageDataArr = [
    { vehType: 'auto', imageUrl: './assets/auto.jpg' },
    { vehType: 'motor', imageUrl: './assets/motor.jpg' },
    { vehType: 'scooter', imageUrl: './assets/scooter.jpg' },
  ];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vehType) {
      if (changes.vehType.currentValue) {
        const imageUrl = this.imageDataArr.find(
          (el) => el.vehType === this.vehType
        );
        if (imageUrl) {
          this.imageUrl = imageUrl.imageUrl;
        }
      }
    }
  }
}
