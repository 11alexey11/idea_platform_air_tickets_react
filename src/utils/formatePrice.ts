export const formatePrice = (price: number, currency: number) => {
    const newPrice = [...(price / currency).toFixed(0)]
        .reverse()
        .reduce((prev, cur, index) => {
            if (index !== 0 && index % 3 === 0) {
                prev += ' ' + cur;
                return prev;
            }
            return prev + cur;
        }, '')
        .split('')
        .reverse()
        .join('')
    
    return newPrice;
};