
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletContextProvider } from "@/components/WalletProvider";
import Index from "./pages/Index";
import Listings from "./pages/Listings";
import Trading from "./pages/Trading";
import Tokens from "./pages/Tokens";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import ApiDocs from "./pages/ApiDocs";
import Documentation from "./pages/Documentation";
import Security from "./pages/Security";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WalletContextProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/api-docs" element={<ApiDocs />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/security" element={<Security />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blog" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </WalletContextProvider>
  </QueryClientProvider>
);

export default App;
