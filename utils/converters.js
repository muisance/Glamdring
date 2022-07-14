/**
 * Convert hex string to json.
 *
 * @param {string} hexString Hex string.
 * @returns {object} JSON or null.
 */
export function hexStringToJson(hexString) {
  if (!hexString || hexString.length === 0) {
    return null;
  }
  try {
    let hex = hexString.toString();
    if (hex.startsWith('0x')) {
      hex = hex.substring(2);
    }
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substring(n, n + 2), 16));
    }
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
    return null;
  }
}
