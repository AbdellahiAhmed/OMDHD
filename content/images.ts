/**
 * Centralized image references — authentic Mauritanian photography, self-hosted
 * and optimized in `/public/images/mr`. Swap any of these for the client's own
 * event/field photos in one place; the components never hardcode image paths.
 */
const mr = (name: string) => `/images/mr/${name}.jpg`;

export const HERO = {
  /** The client's hero photograph (smiling Mauritanian children). */
  local: '/hero_background_image.jpeg',
  remote: '/hero_background_image.jpeg',
};

export function heroSrc() {
  return HERO.local || HERO.remote;
}

export const IMG = {
  welcome: mr('welcome'),
  mauritania: mr('mauritania'),
  about: mr('about'),
  cta: mr('humanitarian-action'),
  areas: {
    'human-rights': mr('human-rights'),
    'human-development': mr('human-development'),
    'women-empowerment': mr('women-empowerment'),
    'youth-empowerment': mr('youth-empowerment'),
    'humanitarian-action': mr('humanitarian-action'),
    'awareness-training': mr('awareness-training'),
  } as Record<string, string>,
  news: [
    mr('awareness-training'),
    mr('human-development'),
    mr('women-empowerment'),
    mr('youth-empowerment'),
    mr('humanitarian-action'),
    mr('human-rights'),
    mr('welcome'),
    mr('mauritania'),
  ],
  gallery: [
    mr('awareness-training'),
    mr('human-development'),
    mr('women-empowerment'),
    mr('youth-empowerment'),
    mr('humanitarian-action'),
    mr('human-rights'),
    mr('about'),
    mr('mauritania'),
    mr('welcome'),
  ],
};
