import { Credentials } from './credentials';

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    address: string;
    postCode: string;
    city: string;
    phoneNumber: string;
    email: string;
    premium?: boolean;
    admin?: boolean;
    registrationNumber?: string;
    globalRating?: number;
    image?: string;
    credentials?: Credentials;
    login?: string;
    password?: string;
    role?: string;
    geolocation?: any;
}
