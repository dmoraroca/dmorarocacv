import { Base } from '../base.model';

export class ExperienciaLaboral extends Base {
    public Id: number;
    public Cultura: string;
    public MesInicial: Date;
    public MesFinal: Date;
    public Empresa: string;
    public Sector: string;
    public Rol: string;
    public EsClient: boolean;
    public Descripcio: string;
    public Tecnologies: string;
    public Clients: any[];
    public Tags: any[];

    constructor()
    {
        super();

        this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Sector", "Sector");
        this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Rol", "Rol");
        this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Descripció", "Descripció");
        this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologies");
        this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Clients", "Clients");

        this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Sector", "Sector");
        this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Rol", "Rol");
        this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Descripció", "Descripción");
        this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologías");
        this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Clients", "Clientes");

        this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Sector", "Sector");
        this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Rol", "Rol");
        this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Descripció", "Description");
        this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologies");
        this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Clients", "Clients");
        
    }
}
