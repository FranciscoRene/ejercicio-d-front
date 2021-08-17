import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reportes() {
    this.router.navigate(['/reportes']);
  }
  
  cerrarSesion() {
    this.router.navigate(['/']);
  }
}
