export class Usuario {
    idUsuario?: number;
    nombreUsuario: string = '';
    contrasena: string = '';
    cargo: string = '';
    estado: boolean = false;
    token: string = '';
    isAuth: boolean = false;
}