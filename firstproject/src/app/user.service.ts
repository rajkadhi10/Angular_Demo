import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  url = `${environment.backEndPoint}/user`;

  constructor(private http: HttpClient) { }

  login(username:String,password:String): Observable<any[]> {
    // console.log("+++++++++++");
    
    const data={'name':username,'pass':password};
    return this.http.post<any[]>(`${this.url}/login`,data);
  }
  putdata(username:String,password:String): Observable<any[]> {
    // console.log("+++++++++++");
    
    const data={'name':username,'pass':password};
    console.log(data);
    
    return this.http.post<any[]>(`${this.url}/putdata`,data);
  }
  getdata(username:String,password:String): Observable<any[]> {
    console.log("+++++++++++");
    return this.http.get<any[]>(`${this.url}/getdata`);
  }
}
