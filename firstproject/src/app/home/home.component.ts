import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: string;  
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token'); 
  }
  logout() {  
    // console.log('logout');  
    // this.authService.logout();  
    // this.router.navigate(['/login']);  
  }    

}
