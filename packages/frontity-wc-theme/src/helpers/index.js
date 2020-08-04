export const getFormattedPrice = (price, currencySymbol, priceNumDecimals, priceDecimalSep, priceThousandSep) => {

    let amount = parseFloat(price).toFixed(priceNumDecimals);

    if (isNaN(amount)) return;

    return (
        currencySymbol + amount
            .replace('.', priceDecimalSep)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + priceThousandSep)
    );
}