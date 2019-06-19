import { Base } from '../base.model';

export class Coneixements extends Base {
    public cultura: string;
    public categoria: string;
    public descripcio: string;
    public experiencia: number;
    public temps: string;
    public nivell: string;
    public versio: string;
    public rowSpan: number = 0; 
    public td: string = "odd";
    public ordre: number = 0;
    
    constructor()
    {
        super();
        
        this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Categoria", "Categoria");
        this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Llenguatge", "Llenguatge");
        this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Experiencia", "Experiència");
        this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Nivell", "Nivell");
        this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Versio", "Versió");

        this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Categoria", "Categoría");
        this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Llenguatge", "Llenguaje");
        this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Experiencia", "Experiencia");
        this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Nivell", "Nivel");
        this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Versio", "Versión");

        this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Categoria", "Category");
        this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Llenguatge", "Language");
        this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Experiencia", "Experience");
        this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Nivell", "Level");
        this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Versio", "Version");
    }
}
