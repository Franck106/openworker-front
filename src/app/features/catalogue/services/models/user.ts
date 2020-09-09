import { Credentials } from './credentials';

export interface User {

    id: number,
    firstName: string,
    lastName: string,
    address: string,
    postCode: string,
    city: string,
    phoneNumber: string,
    email: string,
    premium?: boolean,
    admin?: boolean,
    registrationNumber?: string,
    globalRating: number,
    image?: string,
    credentials: Credentials,
    role?: string,
    geolocation: string
}