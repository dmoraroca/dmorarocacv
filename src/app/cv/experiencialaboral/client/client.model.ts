import { Base } from '../../base.model';

export class Client extends Base {
    public Id: number;
    public Cultura: string;    
    public Empresa: string;
    public EmpresaId: number;
    public NomClient: string;
    public EsClient: boolean;
    public Sector: string;
    public Rol: string;    
    public Descripcio: string;
    public Tecnologies: string;
    public FromClient: boolean;
    public Tags: any[];
    
    constructor()
    {
        super();
        
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Sector", "Sector");
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Rol", "Rol");
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Descripció", "Descripció");
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Tecnologies", "Tecnologies");
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clients");

        this.AddLiteral("[es-ES]-" + "Literal.clients.Sector", "Sector");
        this.AddLiteral("[es-ES]-" + "Literal.clients.Rol", "Rol");
        this.AddLiteral("[es-ES]-" + "Literal.clients.Descripció", "Descripción");
        this.AddLiteral("[es-ES]-" + "Literal.clients.Tecnologies", "Tecnologías");
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clientes");

        this.AddLiteral("[en-GB]-" + "Literal.clients.Sector", "Sector");
        this.AddLiteral("[en-GB]-" + "Literal.clients.Rol", "Rol");
        this.AddLiteral("[en-GB]-" + "Literal.clients.Descripció", "Description");
        this.AddLiteral("[en-GB]-" + "Literal.clients.Tecnologies", "Tecnologies");
        this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clients");        
    }
}
