import { Programas } from "./programas";
import { Encuestadores } from "./encuestadores";
import { Centros } from "./centros";
import { Dptos } from "./dptos";
import { Territorios } from "./territorios";

export class Personas{

    constructor(
        public IdPersona: string,
        public NroAfiliado: string,
        public Apellido: string,
        public Nombre: string,
        public Sexo: string,
        public Edad: number,
        public Programa: Programas,
        public FechaComienzo: Date,
        public Encuestador: Encuestadores,
        public Centro: Centros,
        public Baja: boolean,
        public Comentario: string,
        public Enfermedades: string,
        public Cintura: number,
        public RiesgoCintura: string,
        public Pantorrilla: number,
        public RiesgoPantorrilla: string,
        public Dpto: Dptos,
        public Territorio: Territorios
    ){}
}