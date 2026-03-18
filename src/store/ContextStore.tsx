import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export function StoreProvider({ children }: { children: React.ReactNode }) {
	return (
		<StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
	);
}

export function useStores() {
	return useContext(StoreContext);
}
