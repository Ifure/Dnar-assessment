import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/api";

export const store = configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(cryptoApi.middleware),
});

// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	RootState,
// 	unknown,
// 	Action<string>
// >;
