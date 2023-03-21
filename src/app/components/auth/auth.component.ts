import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Usuario } from 'src/app/interfaces/iUsuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    usuario = new Usuario()
    token: string | any = '';
    url = 'Auth/login'
    constructor(private authService: AuthService, private router: Router) { }

    login() {
        this.authService.login(this.url, this.usuario)
            .subscribe({
                next: (res: any) => {
                    if (res) {
                        this.router.navigate(['usuario'])
                        localStorage.setItem('token', res.token)
                    }
                },
                error: (err: any) => { console.log('No se ha podido establecer una conexión con el servidor...') }
            });
    }
}
