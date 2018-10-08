import { Enfermedades } from "./enfermedades";

export class Personas{

    constructor(
        public IdPersona: string,
        public NroAfiliado: string,
        public ApellidoNombre: string,
        public Sexo: string,
        public Edad: string,
        public Programa: string,
        public FechaComienzo: string,
        public Encuestador: string,
        public Centro: string,
        public Baja: boolean,
        public Comentario: string,
        public Enfermedades: string[],
        public Cintura: string,
        public RiesgoCintura: string,
        public Pantorrilla: string,
        public RiesgoPantorrilla: string,
        public Dpto: string,
        public Territorio: string
    ){}
}