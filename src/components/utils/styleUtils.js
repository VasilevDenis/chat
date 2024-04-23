function stringToBrightColor(str) {
  let hash = 0;
  
  for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 6) - hash);
  }

  const offset = Math.floor(hash / 5) % 170; // Adjust this value for even brighter colors

  // Generate RGB values for a bright color with higher ranges
  const r = (hash + offset * 3) % 256;
  const g = (hash + offset * 5) % 256;
  const b = (hash + offset * 7) % 256;

  return `rgb(${r},${g},${b})`;
}

export default stringToBrightColor;
