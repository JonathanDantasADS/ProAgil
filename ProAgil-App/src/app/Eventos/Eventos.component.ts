import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {


  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getEventos()
  {
    this.http.get('http://localhost:5000/api/values').subscribe(response => 
    {
      this.eventos = response;
    }, error => 
    {
      console.log(error);
    });
  }
}
