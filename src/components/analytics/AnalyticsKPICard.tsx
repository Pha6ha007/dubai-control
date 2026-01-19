import { CheckCircle2, Clock, Camera, Timer, AlertTriangle, TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KPIData } from '@/data/analyticsData';

const iconMap: Record<string, LucideIcon> = {
  CheckCircle2,
  Clock,
  Camera,
  Timer,
  AlertTriangle,
};

const variantStyles = {
  primary: {
    bg: 'bg-analytics-primary-light',
    icon: 'text-analytics-primary',
    border: 'border-analytics-primary/10',
  },
  success: {
    bg: 'bg-analytics-success-light',
    icon: 'text-analytics-success',
    border: 'border-analytics-success/10',
  },
  warning: {
    bg: 'bg-analytics-warning-light',
    icon: 'text-analytics-warning',
    border: 'border-analytics-warning/10',
  },
  danger: {
    bg: 'bg-analytics-danger-light',
    icon: 'text-analytics-danger',
    border: 'border-analytics-danger/10',
  },
  neutral: {
    bg: 'bg-analytics-neutral-light',
    icon: 'text-analytics-neutral',
    border: 'border-analytics-neutral/10',
  },
};

interface AnalyticsKPICardProps {
  data: KPIData;
}

export function AnalyticsKPICard({ data }: AnalyticsKPICardProps) {
  const Icon = iconMap[data.icon] || CheckCircle2;
  const styles = variantStyles[data.variant];
  const isPositive = data.change && data.change > 0;
  const isNegative = data.change && data.change < 0;

  return (
    <div className={cn(
      'relative overflow-hidden rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-soft',
      styles.border
    )}>
      {/* Subtle gradient overlay */}
      <div className={cn('absolute inset-0 opacity-30', styles.bg)} />
      
      <div className="relative">
        {/* Icon */}
        <div className={cn(
          'mb-4 inline-flex items-center justify-center rounded-lg p-2.5',
          styles.bg
        )}>
          <Icon className={cn('h-5 w-5', styles.icon)} strokeWidth={1.5} />
        </div>

        {/* Value */}
        <div className="mb-1">
          <span className="text-3xl font-semibold tracking-tight text-foreground">
            {data.value}
          </span>
        </div>

        {/* Label */}
        <p className="text-sm font-medium text-muted-foreground">
          {data.label}
        </p>

        {/* Change indicator */}
        {data.change !== undefined && (
          <div className="mt-3 flex items-center gap-1.5">
            {isPositive && (
              <TrendingUp className="h-3.5 w-3.5 text-analytics-success" />
            )}
            {isNegative && (
              <TrendingDown className="h-3.5 w-3.5 text-analytics-danger" />
            )}
            <span className={cn(
              'text-xs font-medium',
              isPositive && 'text-analytics-success',
              isNegative && 'text-analytics-danger',
              !isPositive && !isNegative && 'text-muted-foreground'
            )}>
              {isPositive && '+'}
              {data.change}%
            </span>
            <span className="text-xs text-muted-foreground">
              {data.changeLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
