import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { LocationsProvider } from "@/contexts/LocationsContext";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import ProductUpdatesPage from "./pages/ProductUpdatesPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import Locations from "./pages/Locations";
import Settings from "./pages/Settings";
import DemoRequest from "./pages/DemoRequest";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocationsProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/updates" element={<ProductUpdatesPage />} />
            <Route path="/demo" element={<DemoRequest />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes with sidebar layout */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/create-job" element={<CreateJob />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LocationsProvider>
  </QueryClientProvider>
);

export default App;
