import avatar1 from '@/assets/avatars/avatar1.svg';
import avatar2 from '@/assets/avatars/avatar2.svg';
import avatar3 from '@/assets/avatars/avatar3.svg';
import avatar4 from '@/assets/avatars/avatar4.svg';
import avatar5 from '@/assets/avatars/avatar5.svg';
import avatar6 from '@/assets/avatars/avatar6.svg';

const DEFAULT_AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

export function getDefaultAvatar(userId: string): string {
  const hash = userId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return DEFAULT_AVATARS[hash % DEFAULT_AVATARS.length];
}
