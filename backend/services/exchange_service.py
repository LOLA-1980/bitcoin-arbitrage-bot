import requests
import random

def get_binance_price():
    url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"

    try:
        response = requests.get(url, timeout=5)
        data = response.json()

        print("BINANCE RESPONSE:", data)

        # Binance respondió correctamente
        if "price" in data:
            price = float(data["price"])

        # Binance bloqueó la región/IP
        else:
            print("⚠ Binance unavailable. Using fallback price.")
            price = 74000 + random.uniform(-500, 500)

    except Exception as e:
        print("⚠ Binance error:", e)
        price = 74000 + random.uniform(-500, 500)

    # Simulación ligera
    price = price * random.uniform(0.999, 1.001)

    return {
        "exchange": "Binance",
        "price": price
    }


def get_kraken_price():
    url = "https://api.kraken.com/0/public/Ticker?pair=XBTUSD"

    try:
        response = requests.get(url, timeout=5)
        data = response.json()

        print("KRAKEN RESPONSE:", data)

        price = float(data["result"]["XXBTZUSD"]["c"][0])

    except Exception as e:
        print("⚠ Kraken error:", e)
        price = 74000 + random.uniform(-500, 500)

    # Simulación ligera
    price = price * random.uniform(0.999, 1.001)

    return {
        "exchange": "Kraken",
        "price": price
    }