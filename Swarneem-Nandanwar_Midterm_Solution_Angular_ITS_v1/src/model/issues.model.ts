export class Issues{
    id? : number;
    title?: string;
    description?: string;
    assignee?: string;
    date?: Date;
    priority?: 'Low' | 'Medium' | 'High'; 
    status?: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
}