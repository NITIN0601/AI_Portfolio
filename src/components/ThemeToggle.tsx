import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const handleToggle = () => {
    setIsAnimating(true);
    setTheme(isDark ? 'light' : 'dark');
    setTimeout(() => setIsAnimating(false), 2000); // Matches highlight animation duration
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative inline-flex items-center h-8 w-14 rounded-full 
        bg-gray-200 dark:bg-gray-800 transition-colors duration-500 
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        hover:shadow-glow
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        className={`
          absolute left-1 top-1 h-6 w-6 rounded-full 
          flex items-center justify-center 
          transform transition-transform duration-500 ease-in-out
          ${isDark ? 'translate-x-6 text-yellow-300' : 'translate-x-0 text-yellow-500'}
          ${isAnimating ? 'animate-highlight' : ''}
        `}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
}