'use client'; // This must be a client component

import { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // This only runs on the client after mount
    setTime(new Date().toLocaleTimeString());
  }, []);

  // Return a placeholder or null during SSR to match the server exactly
  if (!time) return <span className="opacity-0">00:00:00</span>;

  return <span>{time}</span>;
}