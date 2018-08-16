import { Personas } from "./personas";

export class Encuestas{

    constructor(
        public IdEncuesta: string,
        public Preg1: number,
        public Preg2: number,
        public Preg3: number,
        public Preg4: number,
        public Preg5: number,
        public Preg6: number,
        public Preg7: number,
        public Preg8: number,
        public Preg9: number,
        public Preg10: number,
        public IdPersona: Personas,
        public Baja: boolean,
        public Comentario: string,
        public Total: number,
        public Est_Nutr: string
    ){}
}