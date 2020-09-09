import { Category } from './category';
import { User } from './user';

export interface Proposal {
    id: number,
    name: string,
    image?: string,
    description: string,
    price: number,
    category: Category,
    provider: User,
    maxDistance: number,
    date: string
}