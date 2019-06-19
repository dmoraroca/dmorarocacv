import { Base } from '../base.model';

export class Capcalera extends Base {  
    public cultura: string;
    public Nom: string;
    public Cognoms: string;
    public Adreca: string;
    public CodiPostal: string;
    public Pais: string;
    public Nacionalitat: string;
    public NIF: string;
    public email: string;
    public NickSkype: string;
    public Naixament: string;
    public Ciutat: string;
    public Provincia: string;
    public Telefon: string;

    constructor()
    {
        super();
        
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.NIF", "NIF");
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Mòvil", "Mòvil");
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Direcció", "Direcció");
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.E-mail", "E-mail");
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.UsuariSkype", "Usuari Skype");
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.DataNaixament", "Data Naixament");
        this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Nacionalitat", "Nacionalitat");

        this.AddLiteral("[es-ES]-" + "Literal.capcalera.NIF", "NIF");
        this.AddLiteral("[es-ES]-" + "Literal.capcalera.Mòvil", "Móbil");
        this.AddLiteral("[es-ES]-" + "Literal.capcalera.Direcció", "Dirección");
        this.AddLiteral("[es-ES]-" + "Literal.capcalera.E-mail", "E-mail");
        this.AddLiteral("[es-ES]-" + "Literal.capcalera.UsuariSkype", "Usuario Skype");
        this.AddLiteral("[es-ES]-" + "Literal.capcalera.DataNaixament", "Fecha Nacimiento");
        this.AddLiteral("[es-ES]-" + "Literal.capcalera.Nacionalitat", "Nacionalidad");

        this.AddLiteral("[en-GB]-" + "Literal.capcalera.NIF", "NIF");
        this.AddLiteral("[en-GB]-" + "Literal.capcalera.Mòvil", "Mobile");
        this.AddLiteral("[en-GB]-" + "Literal.capcalera.Direcció", "Address");
        this.AddLiteral("[en-GB]-" + "Literal.capcalera.E-mail", "E-mail");
        this.AddLiteral("[en-GB]-" + "Literal.capcalera.UsuariSkype", " Skype's User");
        this.AddLiteral("[en-GB]-" + "Literal.capcalera.DataNaixament", "Birthday");
        this.AddLiteral("[en-GB]-" + "Literal.capcalera.Nacionalitat", "Nationality");
    }
}
