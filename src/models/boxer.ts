import { Gym } from "./gym";

export interface Boxer {
    id: string,
    dateOfBirth: Date,
    firstName: string,
    lastName: string,
    wins: number,
    loses: number,
    registeredGymId: string,
    registeredGymName: string
}