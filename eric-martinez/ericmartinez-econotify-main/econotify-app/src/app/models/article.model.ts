export interface Article {
    id: string;

    title:string;

    abstract:string;

    journaltitle:string;

    issuedate:string;

    source_created: string;

    ncite: number;

    links: {
      url: string;
    }

    authors:[
       {
          uid:number;
          name:string;
          matched_id:number
       }
    ]
}
