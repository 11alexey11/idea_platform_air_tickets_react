import { Currency } from './currency';

export interface State {
    tickets: {
        list: [],
        sortedList: [],
        isSorting: boolean
    },
    menu: {
        currency: keyof Currency
    }
}