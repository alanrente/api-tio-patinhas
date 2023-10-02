export interface ITimeSeriesDaily {
  ["Meta Data"]: IMetaDataTimeSeriesDaily;
  ["Time Series (Daily)"]: ITimeSeriesDailyValues;
}

export interface IMetaDataTimeSeriesDaily {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}

export interface ITimeSeriesDailyValues {
  [key: string]: ITimeSeriesDailyDate;
}

export interface ITimeSeriesDailyDate {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export const TIME_SERIES_DAILY = "TIME_SERIES_DAILY";
