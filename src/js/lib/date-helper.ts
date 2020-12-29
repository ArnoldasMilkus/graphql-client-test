function fix2symbols(symbol): string {
    if (symbol.toString().length === 1) {
        return `0${symbol}`;
    }

    return symbol;
}

export default function timestampToDate(timestamp): string {
    const date = new Date(parseInt(timestamp, 10));
    const year = date.getFullYear();
    const month = fix2symbols(date.getMonth());
    const day = fix2symbols(date.getDay());
    const hours = fix2symbols(date.getHours());
    const minutes = fix2symbols(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
