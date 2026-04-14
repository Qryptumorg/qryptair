import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./lib/appkit";
import QryptAirPWAPage from "./pages/QryptAirPWAPage";
const queryClient = new QueryClient();
export default function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <QryptAirPWAPage />
      </QueryClientProvider>
    </WagmiProvider>
  );
}