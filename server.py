from flask import Flask, request, render_template
import yfinance as yf

app = Flask(__name__, static_folder='.', static_url_path='')

entered_string = []

@app.route('/')
def index():
  return app.send_static_file('index.html')

@app.route('/stock.html', methods=['GET', 'POST'])
def submit():
  if request.method == 'POST':
    if 'submit' in request.form:
        ticker_symbol = request.form['textarea']
        try: 
           stock_data = yf.Ticker(ticker_symbol)
        except:
           print('No such ticker!')
           return render_template('stock.html', entered_string=entered_string)
        try:
           company_name = stock_data.info['longName']
        except KeyError as e:
           print(e)
           return render_template('stock.html', entered_string=entered_string)
        historical_data = stock_data.history(period="1d")
        close_price = historical_data['Close'].iloc[-1]
        symbol = stock_data.info['symbol']
        print(symbol)
        entered_string.append({'symbol': symbol[0:4], 
                               'name': company_name, 
                               'price': close_price})
    elif 'clear' in request.form:
        entered_string.clear()
  return render_template('stock.html', entered_string=entered_string)

if __name__ == '__main__':
  app.run(debug=True, port=5500)
  