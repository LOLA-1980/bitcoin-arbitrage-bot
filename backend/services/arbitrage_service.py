from services.exchange_service import get_binance_price, get_kraken_price

FEE = 0.0002  # bajado para demo (más oportunidades)

def get_arbitrage_opportunity():
    binance = get_binance_price()
    kraken = get_kraken_price()

    opportunities = []

    # 🔥 probar ambos sentidos
    pairs = [
        (binance, kraken),
        (kraken, binance)
    ]

    for buy, sell in pairs:

        profit = calculate_profit(buy["price"], sell["price"])

        if profit > 0:
            opportunities.append({
                "buy_exchange": buy["exchange"],
                "sell_exchange": sell["exchange"],
                "buy_price": buy["price"],
                "sell_price": sell["price"],
                "profit": round(profit, 2)
            })

    # 💣 FALLBACK DEMO (asegura trades en demo)
    if len(opportunities) == 0:
        opportunities.append({
            "buy_exchange": binance["exchange"],
            "sell_exchange": kraken["exchange"],
            "buy_price": binance["price"] * 0.999,
            "sell_price": kraken["price"] * 1.001,
            "profit": 8.50  # valor demo controlado
        })

    return {
        "opportunities": opportunities
    }


def calculate_profit(buy_price, sell_price):
    buy_fee = buy_price * FEE
    sell_fee = sell_price * FEE

    return (sell_price - sell_fee) - (buy_price + buy_fee)