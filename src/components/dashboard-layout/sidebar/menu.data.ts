import {
  CalendarRange,
  KanbanSquare,
  LayoutDashboard,
  Settings,
  Timer
} from 'lucide-react';
import { DASHBOARD_PAGES } from '@/app/config/pages-url.config';
import type { IMenuItem } from './menu.interface';

export const MENU: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: DASHBOARD_PAGES.HOME,
    name: 'Dashboard',
  },
  {
    icon: KanbanSquare,
    link: DASHBOARD_PAGES.TASKS,
    name: 'Tasks',
  },
  {
    icon: CalendarRange,
    link: DASHBOARD_PAGES.TIME_BLOCKING,
    name: 'Time Blocking',
  },
  {
    icon: Timer,
    link: DASHBOARD_PAGES.TIMER,
    name: 'Pomodoro',
  },
  {
    icon: Settings,
    link: DASHBOARD_PAGES.SETTINGS,
    name: 'Settings',
  }
]
