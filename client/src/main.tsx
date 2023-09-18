import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import ThemeModeProvider from "./context/ThemeMode.tsx";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
      retry: 0,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <ThemeModeProvider>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </ThemeModeProvider>
  </PersistQueryClientProvider>
);
