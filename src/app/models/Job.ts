export interface Job {
    job_id?:string;
    id?:string;
    title?:string;
    description?:string;
    customer_name?:string;
    job_number?:string;
    number?:string;
    customer?:string;
    status?:string;
    customer_id?:string;
    flexitank?:string;
    flexitanks?:any;
    // flexitanks1?:Array<Flexitanks>;
    team?:string;
    assigned_team?: string[];    
  }

