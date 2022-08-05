import { Ticket } from './../models/ticket';

export class HttpService {
    data: Ticket[]

    constructor(data: Ticket[]) {
        this.data = data;
    }

    get() {
        return new Promise<Ticket[]>((resolve) => setTimeout(() => {
            resolve(this.data);
        }, 2000));
    }
}