import { Currency } from './currency';

export interface State {
    tickets: {
        list: []
    },
    menu: {
        currency: keyof Currency
    }
}