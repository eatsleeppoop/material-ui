import generateUtilityClasses from '../generateUtilityClasses';
import generateUtilityClass from '../generateUtilityClass';

export interface BadgeUnstyledClasses {
  /** Class name applied to the root element. */
  root: string;
  /** Class name applied to the badge `span` element. */
  badge: string;
  /** State class applied to the badge `span` element if `invisible={true}`. */
  invisible: string;
}

export type BadgeUnstyledClassKey = keyof BadgeUnstyledClasses;

export function getBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('BaseBadge', slot);
}

const badgeUnstyledClasses: BadgeUnstyledClasses = generateUtilityClasses('BaseBadge', [
  'root',
  'badge',
  'invisible',
]);

export default badgeUnstyledClasses;
