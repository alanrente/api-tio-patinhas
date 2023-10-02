import axios from "axios";
import {
  ITimeSeriesDaily,
  TIME_SERIES_DAILY,
} from "../interfaces/TimeSeriesDaily.interface";

export async function alphavantageService({ symbol }: { symbol: string }) {
  const symbolSA = symbol + ".SA";
  const API_KEY = process.env.ALPHAVANTAGE_API_KEY;
  const URL = `${process.env.ALPHAVANTAGE_API_URL}?function=${TIME_SERIES_DAILY}&symbol=${symbolSA}&apikey=${API_KEY}`;

  if (!URL || !API_KEY) return;

  const { data }: { data: ITimeSeriesDaily } = await axios.get(`${URL}`);

  const lastRefreshedDate = data["Meta Data"]["3. Last Refreshed"];
  const lastRefreshedValueClose =
    data["Time Series (Daily)"][lastRefreshedDate]["4. close"];

  return { lastRefreshedDate, lastRefreshedValueClose };
}
