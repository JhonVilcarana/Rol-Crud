import { Injectable } from '@angular/core';
import { Observable,Subscription, of, from} from 'rxjs';
import { Rol } from './rol';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private httpHeaders = new HttpHeaders({'Content-Type':'aplication/json'});
  private urlrol: string = 'http://localhost:8080/roles/all';

  constructor(private http: HttpClient) {}
  getRoles():Observable<Rol[]>{
    
    return this.http.get<Rol[]>(this.urlrol);
  }
}
