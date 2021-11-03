import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapboxService } from 'src/app/services/mapbox.service';
@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.scss'],
})
export class GeocoderComponent implements OnInit {
  
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null, end: null};
  


  constructor(private geolocation: Geolocation, private mapboxservice: MapboxService, private renderer2:Renderer2) { }

  ngOnInit() {
    this.geoLocal();
  }
  geoLocal() {
    this.geolocation.getCurrentPosition().then((resp) => {
      
      
      this.mapboxservice.dibMap().then(({geocoder, map, marker})=>{
      this.renderer2.appendChild(this.asGeoCoder.nativeElement,
        geocoder.onAdd(map))  
        marker.onAdd(map)
      }).catch((error) => {
        console.log('Error getting location', error);
      });
       
      this.mapboxservice.cbAddress.subscribe((getPoint) => {
        if (this.modeInput === 'start') {
          this.wayPoints.start = getPoint;
        }
        if (this.modeInput === 'end') {
          this.wayPoints.end = getPoint;
        }
      })
      
      
     


    })
    
  }
  drawRoute(): void {
    console.log('Latitud / Longitud', this.wayPoints)
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
      
    ];

    this.mapboxservice.loadCoords(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }
  
}
export class WayPoints {
  start: any;
  end: any
}