import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen: boolean = false;

  constructor(private router: Router) {}

  // Close Hamburger Menu OnClick
  ngOnInit(): void {
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => {
        this.navbarOpen = false;
      });
    }

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

}
