import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) {
    
   }
   getDestinos(): Observable<any>{
     return this.http.get('../../assets/destino.json')
   }
   getConductores(): Observable<any>{
     return this.http.get('../../assets/conductor.json')
   }
   getCiudades(): Observable<any>{
    return this.http.get('../../assets/ciudad.json')
  }
}
