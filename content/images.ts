/**
 * Centralized image references. Swap these for your own assets or CMS URLs
 * in one place. To use the client's real hero photograph, drop it at
 * `public/images/hero.jpg` and set `HERO.local = '/images/hero.jpg'`.
 *
 * Every image in the UI is layered over a brand gradient, so if a remote
 * asset is ever unavailable the composition still reads as intentional.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO = {
  /** Set to '/images/hero.jpg' once the client photo is added to /public/images. */
  local: '',
  remote: u('1488521787991-ed7bbaae773c', 1920),
};

export function heroSrc() {
  return HERO.local || HERO.remote;
}

export const IMG = {
  welcome: u('1531206715517-5c0ba140b2b8'),
  mauritania: u('1547471080-7cc2caa01a7e'),
  about: u('1559027615-cd4628902d4a'),
  cta: u('1469571486292-0ba58a3f068b'),
  areas: {
    'human-rights': u('1591189863430-ab87e120f312'),
    'human-development': u('1524178232363-1fb2b075b655'),
    'women-empowerment': u('1573496359142-b8d87734a5a2'),
    'youth-empowerment': u('1531497865144-0464ef8fb9a9'),
    'humanitarian-action': u('1488521787991-ed7bbaae773c'),
    'awareness-training': u('1517048676732-d65bc937f952'),
  } as Record<string, string>,
  news: [
    u('1517048676732-d65bc937f952'),
    u('1559027615-cd4628902d4a'),
    u('1573496359142-b8d87734a5a2'),
    u('1531497865144-0464ef8fb9a9'),
    u('1488521787991-ed7bbaae773c'),
    u('1524178232363-1fb2b075b655'),
    u('1469571486292-0ba58a3f068b'),
    u('1591189863430-ab87e120f312'),
  ],
  gallery: [
    u('1517048676732-d65bc937f952', 900),
    u('1559027615-cd4628902d4a', 900),
    u('1573496359142-b8d87734a5a2', 900),
    u('1531497865144-0464ef8fb9a9', 900),
    u('1488521787991-ed7bbaae773c', 900),
    u('1524178232363-1fb2b075b655', 900),
    u('1469571486292-0ba58a3f068b', 900),
    u('1591189863430-ab87e120f312', 900),
    u('1547471080-7cc2caa01a7e', 900),
  ],
};
