import type { Stat } from './types';

/** Impact statistics. Indicative demo figures — update from annual reports. */
export const stats: Stat[] = [
  { value: 12000, suffix: '+', labelKey: 'beneficiaries' },
  { value: 45, suffix: '+', labelKey: 'programs' },
  { value: 120, suffix: '+', labelKey: 'trainings' },
  { value: 13, labelKey: 'regions' },
];

/** Compact hero stats (years / beneficiaries / wilayas). */
export const heroStats = [
  { value: 10, suffix: '+', key: 'stat1' as const },
  { value: 12000, suffix: '+', key: 'stat2' as const },
  { value: 13, suffix: '', key: 'stat3' as const },
];
