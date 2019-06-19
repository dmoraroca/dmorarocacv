import { Dictionary } from './utils/dictionary';

export class Base {
    public rss:Dictionary<string> = null;

    AddLiteral(key: string, value: string) {
        this.rss.Add(key, value);
    }

    GetLiteral(cultura:string , key: string) {
        var cadena: string = "[" + cultura + "]-" + "Literal." + key;
        return this.rss.Item(cadena);
    }

    constructor()  {
        this.rss = new Dictionary<string>(); 
    }
}