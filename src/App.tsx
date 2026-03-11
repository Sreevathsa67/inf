import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index    = lazy(() => import("./pages/Index"));
const Problems = lazy(() => import("./pages/Problems"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const About    = lazy(() => import("./pages/About"));
const Contact  = lazy(() => import("./pages/Contact"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BackgroundEffects />
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"         element={<Index />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about"    element={<About />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;