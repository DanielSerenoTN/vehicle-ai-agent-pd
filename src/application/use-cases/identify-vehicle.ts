import { AgentPort } from "../ports/agent.port.js";
export class IdentifyVehicleUseCase {
    constructor(private readonly agent: AgentPort){}

    async execute(image: Buffer){
        return this.agent.identifyVehicle({image});
    }
};
