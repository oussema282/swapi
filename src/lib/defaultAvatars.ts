import male1 from '@/assets/avatars/male1.png';
import male2 from '@/assets/avatars/male2.png';
import male3 from '@/assets/avatars/male3.png';
import female1 from '@/assets/avatars/female1.png';
import female2 from '@/assets/avatars/female2.png';
import female3 from '@/assets/avatars/female3.png';

const MALE_AVATARS = [male1, male2, male3];
const FEMALE_AVATARS = [female1, female2, female3];

export { MALE_AVATARS, FEMALE_AVATARS };

export function getDefaultAvatar(userId: string, gender?: string | null): string {
  const hash = userId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const pool = gender === 'female' ? FEMALE_AVATARS : MALE_AVATARS;
  return pool[hash % pool.length];
}
