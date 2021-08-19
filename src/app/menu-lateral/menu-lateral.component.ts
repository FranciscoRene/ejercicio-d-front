import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

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
