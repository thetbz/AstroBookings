import { LaunchStatus } from "./launch.status.enum";

export interface LaunchDto {
    mission: string;
    destination: string;
    pricePerrSeat: number;
    status: LaunchStatus;
}