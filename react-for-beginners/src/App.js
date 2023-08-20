import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])

  return (
    <div>
      <h1>The Coins { loading ? "" : `(total : ${ coins.length })` }</h1>
      { loading ? <strong>Loading...</strong> : <ul>
        {
          coins.map((coin) =>
            <li>{ coin.name } ({ coin.symbol }) : { coin.quotes.USD.price } USD</li>
          )
        }
      </ul> }

    </div>
  );
}

export default App;
