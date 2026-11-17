'use client';

import { usePathname } from 'next/navigation';
import { normalizePathname } from './pathname';

export function usePortfolioPathname() {
  return normalizePathname(usePathname());
}
