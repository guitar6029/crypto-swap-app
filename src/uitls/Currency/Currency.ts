export const getSymbol = (currency: string): string => {
    switch (currency) {
        case 'usd':
            return '$';
        case 'eur':
            return '€';
        case 'gbp':
            return '£';
        default:
            return '$';
    }
};