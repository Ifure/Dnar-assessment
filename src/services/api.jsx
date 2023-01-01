import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => "/coins/list",
		}),
		getSingleCrypto: builder.query({
			query: (product) => `/search?query=${product}`,
		}),
		// getTrendingCoins: builder.query({
		// 	query: () => `/search/trending`,
		// }),
	}),
});

export const {
	useGetCryptosQuery,
	useGetSingleCryptoQuery,
	// useGetTrendingCoinsQuery,
} = cryptoApi;
