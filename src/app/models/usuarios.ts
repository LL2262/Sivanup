export class Usuarios{

    constructor(
        public IdUsuario: string,
        public NombreUsuario: string,
        public ApellidoUsuario: string,
        public EmailUsuario:string,
        public PasswordUsuario: string,
        public Documento: string,
        public TelefonoUsuario: string,
        public FechaAltaUsuario: Date,
        public FechaBajaUsuario: Date,
        public Baja: boolean,
    ){}
}