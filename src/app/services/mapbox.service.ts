import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'


@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  geocoder = new MapboxGeocoder({
    accessToken: environment.mapboxKey,
    mapboxgl: mapboxgl, 
    placeholder: 'Origen',
  });
  geocoderF = new MapboxGeocoder({
    accessToken: environment.mapboxKey,
    mapboxgl: mapboxgl, 
    placeholder: 'Destino',
  });
  mapMark = new mapboxgl.Marker({
    draggable: true
  })
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11'; // style URL
  zoom = 16; // starting zoom
  

  constructor() {
    this.mapbox.accessToken = environment.mapboxKey;
  }
  dibMap(latitude, longitude): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [longitude, latitude],
          
        });
        this.map.addControl(this.geocoder)
        this.map.addControl(this.geocoderF)
        this.geocoder.on('result',(event)=>{
          console.log(event)
        })        
        resolve({
          map: this.map, geocoder: this.geocoder
        })        
        /* this.mapMark.setLngLat([longitude, latitude]).addTo(this.map); */
      } catch (error) {
        reject(error)
      }

    })

  }

}
