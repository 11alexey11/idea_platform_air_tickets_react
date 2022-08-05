import { tickets } from '../mocks/tickets';
import { HttpService } from './HttpService';

const httpService = new HttpService(tickets);

export class TicketService {
    static async getAll() {
        const tickets = await httpService.get();
        return tickets;
    }
}