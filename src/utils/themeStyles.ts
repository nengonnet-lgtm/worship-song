/**
 * Class names for the three themes, one for each colour tone (roughly 60% base / 30% secondary / 10% accent):
 *   stage-black -> "Stage"  Dark mode & stage tone: near-black neutral base, charcoal cards, bright yellow-orange accent (#F59E0B)
 *   dark        -> "Blue"   Blue / trust tone:      very dark navy base, mid-blue bars and cards, fresh sky-blue accent (#38BDF8)
 *   light       -> "Earth"  Warm earth tone:        cream base, beige + pastel-sage surfaces, brick-orange accent (#B5472E)
 * Every class is written out in full so Tailwind can see it.
 */
export interface ThemeStyles {
  name: 'stage-black' | 'dark' | 'light';
  isLight: boolean;
  /** hex of the signal colour, used as the default chord colour */
  signalHex: string;

  // surfaces
  page: string;
  bar: string;
  subBar: string;
  rail: string;
  dialog: string;
  dialogBar: string;
  card: string;
  popover: string;
  popoverItem: string;
  popoverDivider: string;
  rowHover: string;
  divide: string;

  // text
  textStrong: string;
  textMuted: string;
  accentText: string;

  // controls
  field: string;
  ghostBtn: string;
  accentBtn: string;
  dangerBtn: string;
  iconBtn: string;
  iconBtnDanger: string;
  segOn: string;
  segOff: string;
  chip: string;
  chipOn: string;
  railItem: string;
  railItemOn: string;
  track: string;
  accentColor: string;
  focus: string;
  focusInset: string;

  // badges / cards
  keyBadge: string;
  accentSoft: string;
  cardSelected: string;
  cardIdle: string;
  numberOn: string;
  numberOff: string;
}

const INK: ThemeStyles = {
  name: 'stage-black',
  isLight: false,
  signalHex: '#F59E0B',

  page: 'bg-[#0F0F10] text-[#F2F2F3]',
  bar: 'bg-[#0F0F10] border-[#26262B] text-[#F2F2F3]',
  subBar: 'bg-[#0F0F10] border-[#26262B]',
  rail: 'bg-[#0F0F10] border-[#26262B]',
  dialog: 'bg-[#1A1A1D] border-[#2E2E34] text-[#F2F2F3]',
  dialogBar: 'bg-[#141416] border-[#2E2E34]',
  card: 'bg-[#161618] border-[#26262B]',
  popover: 'bg-[#1A1A1D] border-[#38383F] text-[#F2F2F3] shadow-black/80',
  popoverItem: 'hover:bg-[#26262B]',
  popoverDivider: 'border-[#26262B]',
  rowHover: 'hover:bg-[#1A1A1D]',
  divide: 'divide-[#26262B]',

  textStrong: 'text-[#F2F2F3]',
  textMuted: 'text-[#9A9AA2]',
  accentText: 'text-[#F59E0B]',

  field:
    'bg-[#1A1A1D] border-[#38383F] text-[#F2F2F3] placeholder:text-[#9A9AA2] focus:border-[#F59E0B]',
  ghostBtn: 'bg-transparent hover:bg-[#1A1A1D] text-[#F2F2F3] border-[#38383F]',
  accentBtn: 'bg-[#F59E0B] hover:bg-[#FBBF24] text-[#180D00] font-bold shadow-xs',
  dangerBtn: 'bg-[#D6294A] hover:bg-[#E53A5A] text-white',
  iconBtn: 'text-[#9A9AA2] hover:text-[#F2F2F3] hover:bg-[#26262B]',
  iconBtnDanger: 'text-[#9A9AA2] hover:text-[#FF6B81] hover:bg-[#D6294A]/15',
  segOn: 'bg-[#F59E0B] text-[#180D00] border-[#F59E0B] font-bold',
  segOff: 'bg-transparent text-[#F2F2F3] border-[#38383F] hover:border-[#5A5A63]',
  chip: 'bg-transparent text-[#F2F2F3] border-[#38383F] hover:border-[#5A5A63]',
  chipOn: 'bg-[#F2F2F3] text-[#0F0F10] border-[#F2F2F3]',
  railItem: 'text-[#9A9AA2] hover:text-[#F2F2F3] hover:bg-[#1A1A1D]',
  railItemOn: 'bg-[#1A1A1D] text-[#F2F2F3]',
  track: 'bg-[#26262B]',
  accentColor: 'accent-[#F59E0B]',
  focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]',
  focusInset:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F59E0B]',

  keyBadge: 'bg-[#F2F2F3] text-[#0F0F10] border-transparent',
  accentSoft: 'bg-[#F59E0B]/12 text-[#FBBF24] border-[#F59E0B]/35',
  cardSelected: 'bg-[#1A1A1D] border-[#38383F]',
  cardIdle: 'bg-transparent border-[#26262B] hover:bg-[#161618] hover:border-[#38383F]',
  numberOn: 'bg-[#F59E0B] text-[#180D00] font-bold',
  numberOff: 'bg-[#26262B] text-[#F2F2F3]'
};

const MIDNIGHT: ThemeStyles = {
  name: 'dark',
  isLight: false,
  signalHex: '#38BDF8',

  page: 'bg-[#0B1424] text-[#E9F0FB]',
  bar: 'bg-[#10203A] border-[#223A60] text-[#E9F0FB]',
  subBar: 'bg-[#10203A] border-[#223A60]',
  rail: 'bg-[#10203A] border-[#223A60]',
  dialog: 'bg-[#17294A] border-[#2F4C78] text-[#E9F0FB]',
  dialogBar: 'bg-[#12223F] border-[#2F4C78]',
  card: 'bg-[#12233F] border-[#223A60]',
  popover: 'bg-[#17294A] border-[#2F4C78] text-[#E9F0FB] shadow-black/60',
  popoverItem: 'hover:bg-[#1E3560]',
  popoverDivider: 'border-[#223A60]',
  rowHover: 'hover:bg-[#17294A]',
  divide: 'divide-[#223A60]',

  textStrong: 'text-[#E9F0FB]',
  textMuted: 'text-[#93A8C9]',
  accentText: 'text-[#38BDF8]',

  field:
    'bg-[#17294A] border-[#2F4C78] text-[#E9F0FB] placeholder:text-[#93A8C9] focus:border-[#38BDF8]',
  ghostBtn: 'bg-transparent hover:bg-[#17294A] text-[#E9F0FB] border-[#2F4C78]',
  accentBtn: 'bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#06121F] font-bold shadow-xs',
  dangerBtn: 'bg-[#D6294A] hover:bg-[#E53A5A] text-white',
  iconBtn: 'text-[#93A8C9] hover:text-[#E9F0FB] hover:bg-[#1E3560]',
  iconBtnDanger: 'text-[#93A8C9] hover:text-[#FF6B81] hover:bg-[#D6294A]/15',
  segOn: 'bg-[#38BDF8] text-[#06121F] border-[#38BDF8] font-bold',
  segOff: 'bg-transparent text-[#E9F0FB] border-[#2F4C78] hover:border-[#4E6C9C]',
  chip: 'bg-transparent text-[#E9F0FB] border-[#2F4C78] hover:border-[#4E6C9C]',
  chipOn: 'bg-[#E9F0FB] text-[#0B1424] border-[#E9F0FB]',
  railItem: 'text-[#93A8C9] hover:text-[#E9F0FB] hover:bg-[#17294A]',
  railItemOn: 'bg-[#17294A] text-[#E9F0FB]',
  track: 'bg-[#223A60]',
  accentColor: 'accent-[#38BDF8]',
  focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]',
  focusInset:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#38BDF8]',

  keyBadge: 'bg-[#E9F0FB] text-[#0B1424] border-transparent',
  accentSoft: 'bg-[#38BDF8]/12 text-[#7DD3FC] border-[#38BDF8]/35',
  cardSelected: 'bg-[#17294A] border-[#2F4C78]',
  cardIdle: 'bg-transparent border-[#223A60] hover:bg-[#12233F] hover:border-[#2F4C78]',
  numberOn: 'bg-[#38BDF8] text-[#06121F] font-bold',
  numberOff: 'bg-[#223A60] text-[#E9F0FB]'
};

const PAPER: ThemeStyles = {
  name: 'light',
  isLight: true,
  signalHex: '#B5472E',

  page: 'bg-[#F4EEE4] text-[#2B241D]',
  bar: 'bg-[#EAE1D2] border-[#D9CEBB] text-[#2B241D]',
  subBar: 'bg-[#EFE7DA] border-[#D9CEBB]',
  rail: 'bg-[#EAE1D2] border-[#D9CEBB]',
  dialog: 'bg-[#FBF7F0] border-[#DCD2C0] text-[#2B241D]',
  dialogBar: 'bg-[#EFE7DA] border-[#DCD2C0]',
  card: 'bg-[#E4E9D9] border-[#CBD3BC]',
  popover: 'bg-[#FBF7F0] border-[#D2C8B5] text-[#2B241D] shadow-[#2B241D]/15',
  popoverItem: 'hover:bg-[#EFE7DA]',
  popoverDivider: 'border-[#DDD3C1]',
  rowHover: 'hover:bg-[#EAE1D2]',
  divide: 'divide-[#DDD3C1]',

  textStrong: 'text-[#2B241D]',
  textMuted: 'text-[#75695B]',
  accentText: 'text-[#B5472E]',

  field:
    'bg-[#FBF7F0] border-[#D2C8B5] text-[#2B241D] placeholder:text-[#75695B] focus:border-[#B5472E]',
  ghostBtn: 'bg-transparent hover:bg-[#EAE1D2] text-[#2B241D] border-[#D2C8B5]',
  accentBtn: 'bg-[#B5472E] hover:bg-[#983A25] text-white font-bold shadow-xs',
  dangerBtn: 'bg-[#A4132F] hover:bg-[#8A1028] text-white',
  iconBtn: 'text-[#75695B] hover:text-[#2B241D] hover:bg-[#E4DACA]',
  iconBtnDanger: 'text-[#75695B] hover:text-[#A4132F] hover:bg-[#A4132F]/10',
  segOn: 'bg-[#B5472E] text-white border-[#B5472E] font-bold',
  segOff: 'bg-transparent text-[#2B241D] border-[#D2C8B5] hover:border-[#B5AA95]',
  chip: 'bg-transparent text-[#2B241D] border-[#D2C8B5] hover:border-[#B5AA95]',
  chipOn: 'bg-[#2B241D] text-[#F4EEE4] border-[#2B241D]',
  railItem: 'text-[#75695B] hover:text-[#2B241D] hover:bg-[#E4DACA]',
  railItemOn: 'bg-[#FBF7F0] text-[#2B241D]',
  track: 'bg-[#DDD3C1]',
  accentColor: 'accent-[#B5472E]',
  focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5472E]',
  focusInset:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B5472E]',

  keyBadge: 'bg-[#2B241D] text-[#F4EEE4] border-transparent',
  accentSoft: 'bg-[#B5472E]/10 text-[#983A25] border-[#B5472E]/30',
  cardSelected: 'bg-[#FBF7F0] border-[#CFC5B2] shadow-xs',
  cardIdle: 'bg-transparent border-[#DDD3C1] hover:bg-[#EAE1D2] hover:border-[#CFC5B2]',
  numberOn: 'bg-[#B5472E] text-white font-bold',
  numberOff: 'bg-[#E4E9D9] text-[#2B241D]'
};

/** Only an explicit "stage-black" or "light" differs from Midnight (the "dark" value). */
export function getThemeStyles(theme?: string): ThemeStyles {
  if (theme === 'light') return PAPER;
  if (theme === 'stage-black') return INK;
  return MIDNIGHT;
}

export const SIGNAL_ON_DARK = '#F59E0B'; // Stage (bright yellow-orange)
export const SIGNAL_ON_MIDNIGHT = '#38BDF8'; // Blue
export const SIGNAL_ON_LIGHT = '#B5472E'; // Earth (brick orange, 5:1 on cream)

// Chord colours that are just "a theme's default" (this palette and the earlier amber one),
// as opposed to one the user picked on purpose
const THEME_DEFAULT_SIGNALS = [
  '#f59e0b', '#34d399', '#38bdf8', '#b5472e', // current defaults
  '#d97706', '#b45309', // earlier amber defaults
  '#1d4ed8', '#ff5b3a', '#c42e14', '#e8421f'
];

/**
 * Chord colour to use when the theme changes: switching to Earth always takes its brick orange (bright colours
 * are too light on cream); switching to Stage or Blue replaces only another theme's default signal, so a
 * colour the user picked on purpose is kept.
 */
export function chordColorForTheme(theme: 'stage-black' | 'dark' | 'light', current?: string): string {
  if (theme === 'light') return SIGNAL_ON_LIGHT;
  const target = theme === 'dark' ? SIGNAL_ON_MIDNIGHT : SIGNAL_ON_DARK;
  if (!current || THEME_DEFAULT_SIGNALS.includes(current.toLowerCase())) return target;
  return current;
}
