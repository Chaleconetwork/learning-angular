import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/iUsuario';
import { GenericService } from 'src/app/services/generic.service';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    usuario = new Usuario();
    usuarios: Usuario[] = [];
    url = 'Usuario';
    validar = false;

    constructor(private generic: GenericService<Usuario>) { }

    ngOnInit(): void {
        this.get();
    }

    async get() {
        this.generic.getAll(this.url)
            .subscribe({
                next: (res: Usuario[]) => { this.usuarios = res, this.validar = true },
                error: (err: any) => {
                    console.log('No se ha podido establecer una conexión con el servidor...', err)
                }
            });
    }
}
