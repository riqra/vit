const primary = {
  c10: '#E5EEFF',
  c20: '#CCDDFF',
  c30: '#BFD1F8',
  c40: '#407EFF', // default
  c50: '#3375FF',
  c60: '#0053FF',
  c70: '#003FC2',
  c80: '#002E8F',
  get default() { return this.c40 }
}

const secondary = {
  c10: '#FFF2E5',
  c20: '#FFE6CC',
  c30: '#FFCC99',
  c40: '#FFB366',
  c50: '#FF9933',
  c60: '#FF8000', // default
  c70: '#ED7700',
  c80: '#B85C00',
  get default() { return this.c60 }
}

const warning = {
  default: '#FFD027',
  darker: '#CC9F00',
  light: '#FFDD66'
}

const success = {
  default: '#03D4C3',
  darker: '#02A194',
  light: '#13E2D1'
}

const error = {
  default: '#FF2D55',
  darker: '#CC0027',
  light: '#FF8098'
}

const grayscale = {
  c10: '#FFFFFF',
  c20: '#FFFFFFB2',
  c30: '#F9F9FA',
  c40: '#E8E8E8',
  c50: '#00000026',
  c60: '#A0A4A8',
  c70: '#52575C',
  c80: '#25282B',
  get white() { return this.c10 },
  get black() { return this.c80 },
  get mainText() { return this.c80 },
  get secondaryText() { return this.c70 },
  get inactiveText() { return this.c60 },
  get darkBackground() { return this.c50 },
  get disableState() { return this.c40 },
  get background() { return this.c30 },
}

const color = {
  primary,
  secondary,
  warning,
  success,
  error,
  grayscale
}

export default color;
