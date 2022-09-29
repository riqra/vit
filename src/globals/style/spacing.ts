const gridSize = 8;

const spacing = {
  /**
   * 
   * @param factor the multiplier of the gridSize
   * @returns the expected size in pixels
   */
  s: (factor: number): string => (gridSize * factor + 'px'),
  get s2() { return this.s(0.25) },
  get s4() { return this.s(0.5) },
  get s8() { return this.s(1) },
  get s16() { return this.s(2) },
  get s24() { return this.s(3) },
  get s32() { return this.s(4) },
  get s40() { return this.s(5) },
  get s48() { return this.s(6) }
}

export default spacing;
