import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Consumo API GET';

  personajes: any = {};

  constructor(private service: PersonajesService){}

  ngOnInit(): void {
      this.service.getAllPersonajes().subscribe(personajes => {
        this.personajes = personajes.results;
        console.log(this.personajes);
      });
  }
}
