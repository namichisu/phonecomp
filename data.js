// data.js – generates mock phone data (1000 entries)
const phoneData = (() => {
  const brands = ["Apple","Samsung","Google","OnePlus","Xiaomi","Motorola","Sony","LG","Huawei","Nokia"];
  const phones = [];
  for (let b = 0; b < brands.length; b++) {
    const brand = brands[b];
    for (let i = 1; i <= 100; i++) {
      const model = `${brand} Model ${i}`;
      phones.push({
        brand,
        model,
        releaseYear: 2024,
        priceUSD: 200 + ((i * 13) % 1000),
        display: `${6 + (i % 2)}.${i % 10}-inch ${brand.includes('Apple') ? 'OLED' : 'AMOLED'}, 120Hz`,
        camera: `${12 + (i % 48)}MP ${brand.includes('Apple') ? 'Triple' : 'Quad'} Camera`,
        battery: `${4000 + (i % 2000)}mAh`,
        chipset: `Chipset ${b}-${i}`,
        os: brand.includes('Apple') ? 'iOS 18' : 'Android 14'
      });
    }
  }
  return phones;
})();
