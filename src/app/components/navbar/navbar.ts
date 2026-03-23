import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive], // ICI ON AJT LE ROUTAGE
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  public authService = inject(AuthService);

}
