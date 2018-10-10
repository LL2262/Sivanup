import { Personas } from "./personas";

export class Encuestas{

    constructor(
        public IdEncuesta: string,
        public Preg1: string,
        public Preg2: string,
        public Preg3: string,
        public Preg4: string,
        public Preg5: string,
        public Preg6: string,
        public Preg7: string,
        public Preg8: string,
        public Preg9: string,
        public Preg10: string,
        public IdPersona: Personas,
        public Baja: boolean,
        public Total: string,
        public Est_Nutr: string
    ){}
}