export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    email: string,
    //age?: number; makes the age optional
    //address?: {
    //    street?: string;
    //    city?: string;
    //   state?: string;
    //},
    //image?: string,
    isActive?: boolean,
    balence?: number,
    registered?: any,
    hide?: boolean
}