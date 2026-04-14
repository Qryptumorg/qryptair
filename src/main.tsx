import { createRoot } from "react-dom/client";
import { initAppKit } from "./lib/appkit";
import App from "./App";

async function fetchAndInitAppKit(): Promise<void> {
  const rawBase = (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/$/, "");
  const base = rawBase ? `${rawBase}/api` : null;
  if (base) {
    try {
      const res = await fetch(`${base}/config`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const data = await res.json();
        if (data?.wcProjectId) { await initAppKit(data.wcProjectId); return; }
      }
    } catch {}
  }
  const envId = import.meta.env.VITE_REOWN_PROJECT_ID as string | undefined;
  if (envId) await initAppKit(envId);
}

async function boot() {
  await Promise.race([fetchAndInitAppKit(), new Promise<void>(r => setTimeout(r, 4000))]);
  createRoot(document.getElementById("root")!).render(<App />);
}
boot();