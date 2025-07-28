import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Homescreen from './screens/Homescreen';

const queryClient = new QueryClient();

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background text-foreground">
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <main>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Homescreen />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
