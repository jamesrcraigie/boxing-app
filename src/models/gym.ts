import { Boxer } from "./boxer";

export interface Gym {
    id: string | undefined,
    name: string,
    address: string,
    boxers: Boxer[]
}