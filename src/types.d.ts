declare global {
  interface Window {
    plausible: (...args: unknown[]) => void;
  }
  const plausible: (...args: unknown[]) => void;
}

export {};
