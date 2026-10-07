import { VehicleIdentification } from "../../domain/vehicle/vehicle.js";

export interface AgentPort {
    identifyVehicle(input: {
        image: Buffer;
    }): Promise<VehicleIdentification>;
};
