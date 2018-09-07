export class Usuarios{

    constructor(
        public IdUsuario: string,
        public NombreUsuario: string,
        public ApellidoUsuario: string,
        public EmailUsuario:string,
        public EmailVerificated: boolean,
        public PasswordUsuario: string,
        public Documento: string,
        public TelefonoUsuario: string,
        public IdPermiso: number,
        public FechaAltaUsuario: Date,
        public FechaBajaUsuario: Date,
        public Baja: boolean,
    ){}
}