import { cn } from 'clsx';
import { Inter } from 'next/font/google';
import { Lucide } from 'lucide-react';
import type { ReactNode } from 'reactimport { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add competitor logic
  };

  return (
    <div className={cn('bg-zinc-50', 'h-screen', 'flex', 'justify-center', 'items-center')}>
      <div className={cn('bg-white', 'p-8', 'rounded-xl', 'shadow-sm', 'max-w-md')}>
        <h1 className={cn('text-zinc-900', 'font-bold', 'text-3xl', 'mb-4')}>PriceRadar</h1>
        <p className={cn('text-zinc-600', 'mb-4')}>
          Automate the daily tracking of competitor pricing pages and receive instant email alerts when prices or plan names change.
        </p>
        <form onSubmit={handleSubmit} className={cn('flex', 'flex-col', 'gap-4')}>
          <input
            type="text"
            value={competitorUrl}
            onChange={(event) => setCompetitorUrl(event.target.value)}
            placeholder="Add competitor URL"
            className={cn('bg-zinc-100', 'p-2', 'border', 'border-zinc-200', 'rounded-md')}
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
            className={cn('bg-zinc-100', 'p-2', 'border', 'border-zinc-200', 'rounded-md')}
          />
          <button
            type="submit"
            className={cn('bg-zinc-900', 'text-white', 'hover:bg-zinc-700', 'p-2', 'rounded-lg')}
          >
            Start tracking
          </button>
        </form>
      </div>
    </div>
  );
}