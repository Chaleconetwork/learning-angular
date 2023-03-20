import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenericService<T> {

    constructor(private http: HttpClient) { }
    
    getToken() {
        let authToken = localStorage.getItem('token');

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            })
        };

        return httpOptions;
    }

    getAll(url: string): Observable<T[]> | any {
        return this.http.get<T[]>(`${environment.API_URL}/${url}`, this.getToken())
    }

    getById(url: string, id: number): Observable<T> | any {
        return this.http.get<T>(`${environment.API_URL}/${url}/${id}`, this.getToken())
    }

    post(url: string, body: string): Observable<T> | any {
        return this.http.post<T>(`${environment.API_URL}/${url}`, body, this.getToken())
    }

    put(url: string, body: string): Observable<T> | any {
        return this.http.put<T>(`${environment.API_URL}/${url}`, body, this.getToken())
    }

    delete(url: string, id: number): Observable<T> | any {
        return this.http.delete<T>(`${environment.API_URL}/${url}/${id}`, this.getToken())
    }
}
