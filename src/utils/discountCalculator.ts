export const calculateDiscount = (price: number, discountPercentage: number): number => {
    return +(price * (discountPercentage / 100)).toFixed(2);
};

export const getDiscountedPrice = (price: number, discountPercentage: number) => {
    return +(price - calculateDiscount(price, discountPercentage)).toFixed(2);
};