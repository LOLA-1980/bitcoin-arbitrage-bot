from flask import Flask
from flask_cors import CORS

from services.exchange_service import get_binance_price, get_kraken_price
from services.arbitrage_service import get_arbitrage_opportunity
from services.simulation_service import wallet, execute_trade

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"message": "Backend running"}

@app.route("/api/prices")
def prices():
    return {
        "binance": get_binance_price(),
        "kraken": get_kraken_price()
    }


@app.route("/api/arbitrage")
def arbitrage():

    binance = get_binance_price()
    kraken = get_kraken_price()

    prices = {
        "binance": binance,
        "kraken": kraken
    }

    data = get_arbitrage_opportunity(
        binance,
        kraken
    )

    if data["opportunities"]:
        best = max(
            data["opportunities"],
            key=lambda x: x["profit"]
        )

        execution = execute_trade(best)

        return {
            "prices": prices,
            "opportunity": best,
            "execution": execution
        }

    return {
        "prices": prices,
        "message": "No arbitrage"
    }


@app.route("/api/history")
def history():
    return {
        "history": wallet["history"],
        "total_profit": wallet["total_profit"]
    }


if __name__ == "__main__":
    app.run(debug=True)