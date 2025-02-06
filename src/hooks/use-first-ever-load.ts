import { useRouter } from 'next/router';
import { useLocalStorage } from './use-local-storage';

export function useFirstEverLoad() {
  const router = useRouter();

  return useLocalStorage('user:first-ever-load', () => {
    return {
      path: router.pathname,
      time: Date.now(),
      query: router.query,
    };
  });
}

export function useVisitCounts() {
  return useLocalStorage('user:visit-counts', () => {
    return 1;
  });
}
