/**
 * 
 * @param hexColor A color in hexadecimal
 * @param alpha A number from 0 to 1
 * @returns A color with transparency in hexadecimal
 */
const hexAlpha = (hexColor: string, alpha: number) => {
  return hexColor.substring(0, 7) + Math.round(alpha * 255).toString(16);
}

export default hexAlpha;
