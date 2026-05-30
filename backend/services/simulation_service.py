wallet = {
    "usd": 10000,
    "btc": 1,
    "history": [],
    "total_profit": 0
}

def execute_trade(opportunity):
    amount_btc = 0.05

    buy_price = opportunity["buy_price"]
    sell_price = opportunity["sell_price"]

    profit = (sell_price - buy_price) * amount_btc

    trade = {
        "buy_exchange": opportunity["buy_exchange"],
        "sell_exchange": opportunity["sell_exchange"],
        "buy_price": buy_price,
        "sell_price": sell_price,
        "amount_btc": amount_btc,
        "profit": round(profit, 2)
    }

    wallet["usd"] += profit
    wallet["total_profit"] += profit
    wallet["history"].append(trade)

    return {
        "trade_executed": trade,
        "wallet": wallet
    }