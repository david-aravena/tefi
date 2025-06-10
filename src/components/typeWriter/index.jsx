import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed(''); // Reinicia si cambia el texto
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}