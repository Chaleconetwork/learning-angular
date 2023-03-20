import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../interfaces/iUsuario';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }
    // https://localhost:7165/api/Auth/login
    login(url: string, usuario: Usuario): Observable<Usuario> | any {
        return this.http.post<Usuario>(`${environment.API_URL}/${url}`, usuario, httpOptions)
    }

    isAuth() {
        const token = localStorage.getItem('token')
        return token;
    }

    logout() {
        localStorage.removeItem('token')
        this.router.navigate(['/'])
    }
}
