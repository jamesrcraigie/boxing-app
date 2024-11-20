import { Gym } from "./gym";

export interface BoxerDto {
    id: string | undefined,
    dateOfBirth: string,
    firstName: string,
    lastName: string,
    registeredGymId: string
}