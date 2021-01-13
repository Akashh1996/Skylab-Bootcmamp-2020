export interface Author {
    id:string;
    title:string;
    abstractstring;
    journaltitle:string;
    issuedate:string;
    source_created:string;
    ncite: number;
    authors:[
       {
          uid:string;
          name:string;
          matched_id:string;
       },
       {
          uid:string;
          name:string;
          matched_id:string;
       }
    ]
}
