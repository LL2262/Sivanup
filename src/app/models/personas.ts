import { Programas } from "./programas";
import { Encuestadores } from "./encuestadores";
import { Centros } from "./centros";
import { Dptos } from "./dptos";
import { Territorios } from "./territorios";
import { Enfermedades } from "./enfermedades";

export class Personas{

    constructor(
        public IdPersona: string,
        public NroAfiliado: string,
        public ApellidoNombre: string,
        public Sexo: string,
        public Edad: string,
        public Programa: Programas,
        public FechaComienzo: string,
        public Encuestador: Encuestadores,
        public Centro: Centros,
        public Baja: boolean,
        public Comentario: string,
        public Enfermedades: Enfermedades[],
        public Cintura: string,
        public RiesgoCintura: string,
        public Pantorrilla: string,
        public RiesgoPantorrilla: string,
        public Dpto: Dptos,
        public Territorio: Territorios
    ){}
}