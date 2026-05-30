# ⚡ Bitcoin Arbitrage Trading Bot

Real-time Bitcoin arbitrage simulation system that monitors multiple exchanges, detects price inefficiencies, and executes simulated trading operations with profit tracking in real time.

---

## 🚀 Features

- 🔴 Real-time BTC price monitoring (Binance & Kraken)
- ⚡ Arbitrage opportunity detection engine
- 💰 Simulated trade execution with fees included
- 📊 Live wallet tracking (USD / BTC / PnL)
- 📈 Trade history visualization
- 📉 Profit evolution chart (Recharts)
- 🔄 Auto-refreshing dashboard (real-time simulation)
- 🎯 Net profit calculation with trading fees

---

## 🧠 System Architecture

### Backend (Flask)
- REST API for market data
- Arbitrage detection engine
- Trade simulation system
- Wallet state management
- Exchange integrations via public APIs

### Frontend (React)
- Real-time trading dashboard
- Live wallet metrics
- Opportunity tracker
- Trade history module
- Profit chart visualization

---

## 🔄 How It Works

1. The system fetches BTC prices from multiple exchanges
2. It compares bid/ask differences in real time
3. Calculates net profit after fees
4. Detects arbitrage opportunities
5. Executes simulated trades
6. Updates wallet balance and trade history
7. Frontend renders live system state

---

## 📊 Tech Stack

**Frontend**
- React
- Tailwind CSS
- Recharts

**Backend**
- Flask
- Python
- Requests
- Flask-CORS

---

## 📡 API Endpoints

- `GET /api/prices`  
  Returns live BTC prices from supported exchanges

- `GET /api/arbitrage`  
  Detects arbitrage opportunities and simulates trade execution

- `GET /api/history`  
  Returns wallet state and historical trades

---


## ⚙️ Setup Instructions

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python app.py

### Frontend
```bash
cd frontend
npm install
npm run dev


## 📈 Example Output

- Detects price differences between exchanges in real time  
- Executes simulated arbitrage trades  
- Updates wallet balance dynamically  
- Tracks cumulative profit over time  
- Displays live trading activity in the UI  

---

## 🎯 Goal of the Project

To simulate a high-frequency arbitrage trading system capable of detecting and reacting to inefficiencies in cryptocurrency markets in real time, including fee-aware profit calculation and automated execution logic.

---

## 🧑‍💻 Author

Built for Coding Challenge Mexico — Arbitrage Trading System

