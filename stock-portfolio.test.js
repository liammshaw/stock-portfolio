const myFunctions = require('./stock-portfolio.js');
let portfolio = myFunctions.newPortfolio();

beforeEach(() => {
    portfolio = myFunctions.newPortfolio();
})

test("Testing isPortfolioEmpty -- success/true" , () => {
    expect(myFunctions.isPortfolioEmpty(portfolio)).toBeTruthy();
}) 

test("Testing isPortfolioEmpty -- success/false", () => {
    myFunctions.makePurchase(portfolio, "liam", 1);
    expect(myFunctions.isPortfolioEmpty(portfolio)).toBeFalsy();
})

test("Test uniqueTickers no tickers -- success", () => {
    const target = 0;
    const result = myFunctions.uniqueTickers(portfolio);
    expect(result).toBe(target);
})

test("Test uniqueTickers 1 ticker -- success", () => {
    const target = 1;
    myFunctions.makePurchase(portfolio, "liam", 1);
    const result = myFunctions.uniqueTickers(portfolio);
    expect(result).toBe(target);
})

test("Test makePurchase 1 ticker -- success", () => {
    const target = 1;
    myFunctions.makePurchase(portfolio, "liam", 1);
    const result = myFunctions.uniqueTickers(portfolio);
    expect(result).toBe(target);
})

test("Test makePurchase 1 ticker twice -- success", () => {
    const target = 5;
    myFunctions.makePurchase(portfolio, "liam", 1);
    myFunctions.makePurchase(portfolio, "liam", 4)
    const result = myFunctions.getShares(portfolio, "liam");
    expect(result).toBe(target);
})

test("Test makeSale selling less than owned -- success,", () => {
    const target = 3;
    myFunctions.makePurchase(portfolio, "liam", 6);
    myFunctions.makeSale(portfolio, "liam", 3);
    const result = myFunctions.getShares(portfolio, "liam");
    expect(result).toBe(target);
})

test("Test makeSale selling amount that owned -- success,", () => {
    const target = undefined;
    myFunctions.makePurchase(portfolio, "liam", 6);
    myFunctions.makeSale(portfolio, "liam", 6);
    const result = myFunctions.getShares(portfolio, "liam");
    expect(result).toBe(target);
})

test("Test makeSale selling more than owned -- success,", () => {
    const target = undefined;
    myFunctions.makePurchase(portfolio, "liam", 6);
    expect(() => myFunctions.makeSale(portfolio, "liam", 8)).toThrow()
})

test("Test makePurchase with 0 -- success,", () => {
    const target = undefined;
    myFunctions.makePurchase(portfolio, "liam", 0);
    const result = myFunctions.getShares(portfolio, "liam");
    expect(result).toBe(target);
})