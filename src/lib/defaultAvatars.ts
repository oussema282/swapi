import lion from '@/assets/avatars/lion.jpg';
import bear from '@/assets/avatars/bear.jpg';
import wolf from '@/assets/avatars/wolf.jpg';
import fox from '@/assets/avatars/fox.jpg';
import eagle from '@/assets/avatars/eagle.jpg';
import bull from '@/assets/avatars/bull.jpg';

const DEFAULT_AVATARS = [lion, bear, wolf, fox, eagle, bull];

export function getDefaultAvatar(userId: string): string {
  const hash = userId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return DEFAULT_AVATARS[hash % DEFAULT_AVATARS.length];
}
