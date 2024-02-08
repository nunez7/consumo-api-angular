import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Person } from '../models/persons';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private API_PERSONAJES = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  public getAllPersonajes(): Observable<any>{
    return this.http.get(this.API_PERSONAJES);
  }

  public getAllPerson(): Observable<Person[]>{
    return this.http.get<any>(this.API_PERSONAJES).pipe(
      map(response => response.results)
    );
  }
}
