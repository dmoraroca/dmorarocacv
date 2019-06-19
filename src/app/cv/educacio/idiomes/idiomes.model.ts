import { Base } from '../../base.model';

export class Idiomes extends Base {
    public Cultura: string;
    public Idioma: number;
    public Escriptura: string;
    public Lectura: string;

    constructor()
    {
        super();
        
        this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Idioma", "Idioma");
        this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Escriptura", "Escriptura");
        this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Lectura", "Lectura");

        this.AddLiteral("[es-ES]-" + "Literal.idiomes.Idioma", "Idioma");
        this.AddLiteral("[es-ES]-" + "Literal.idiomes.Escriptura", "Escritura");
        this.AddLiteral("[es-ES]-" + "Literal.idiomes.Lectura", "Lectura");

        this.AddLiteral("[en-GB]-" + "Literal.idiomes.Idioma", "Language");
        this.AddLiteral("[en-GB]-" + "Literal.idiomes.Escriptura", "Write");
        this.AddLiteral("[en-GB]-" + "Literal.idiomes.Lectura", "Read");
        
    }
}
