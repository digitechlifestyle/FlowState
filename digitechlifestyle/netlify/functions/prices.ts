import type { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h&sparkline=false"
    );
    if (!res.ok) throw new Error(`CoinGecko ${res.status}`);

    const data = await res.json() as Array<{
      symbol: string;
      current_price: number;
      price_change_percentage_24h: number;
    }>;

    const coins = data.map((c) => ({
      symbol: c.symbol.toUpperCase(),
      price: c.current_price,
      change: c.price_change_percentage_24h ?? 0,
    }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(coins),
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: String(e) }) };
  }
};
