import {
  Scale,
  Sprout,
  HeartHandshake,
  Rocket,
  HandHeart,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

/** Map of icon names used by content data to their lucide components. */
const icons: Record<string, LucideIcon> = {
  Scale,
  Sprout,
  HeartHandshake,
  Rocket,
  HandHeart,
  GraduationCap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Scale;
  return <Cmp className={className} aria-hidden="true" />;
}
