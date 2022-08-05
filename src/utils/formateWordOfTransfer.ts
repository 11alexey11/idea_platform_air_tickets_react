export const formateWordOfTransfer = (stops: number) => {
    if (stops % 10 === 0 || stops % 10 >= 5) return `${stops} пересадок`;
    if (stops % 10 === 1) return `${stops} пересадка`;
    return `${stops} пересадки`;
}