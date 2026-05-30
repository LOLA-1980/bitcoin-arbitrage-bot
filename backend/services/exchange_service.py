import requests
import random

def get_binance_price():
    url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    response = requests.get(url)
    data = response.json()

    price = float(data["price"])

    # 👇 SIMULACIÓN ligera
    price = price * random.uniform(0.999, 1.001)

    return {
        "exchange": "Binance",
        "price": price
    }

def get_kraken_price():
    url = "https://api.kraken.com/0/public/Ticker?pair=XBTUSD"
    response = requests.get(url)
    data = response.json()

    price = float(data["result"]["XXBTZUSD"]["c"][0])

    # 👇 SIMULACIÓN ligera
    price = price * random.uniform(0.999, 1.001)

    return {
        "exchange": "Kraken",
        "price": price
    }