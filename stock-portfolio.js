function newPortfolio(){
    const portfolio = new Map();
    return portfolio;
}
exports.newPortfolio = newPortfolio

function isPortfolioEmpty(portfolio){
    return portfolio.size === 0;
}
exports.isPortfolioEmpty = isPortfolioEmpty;

function uniqueTickers(portfolio){
    return portfolio.size;
}
exports.uniqueTickers = uniqueTickers;

function getShares(portfolio, ticker){
    return portfolio.get(ticker);
}
exports.getShares = getShares;

function makePurchase(portfolio, ticker, shares) {
    if(shares > 0){
        if(portfolio.has(ticker)){
            portfolio.set(ticker, portfolio.get(ticker) + shares);
        }
        else{
            portfolio.set(ticker, shares);
        }
    }
}
exports.makePurchase = makePurchase;

function makeSale(portfolio, ticker, shares){
    if(portfolio.has(ticker)){
        if(shares > portfolio.get(ticker)){
            throw "ShareSaleException";
        }
        else if(shares === portfolio.get(ticker)){
            portfolio.delete(ticker);
        }
        else{
            portfolio.set(ticker, portfolio.get(ticker) - shares);
        }
    }
}
exports.makeSale = makeSale;

