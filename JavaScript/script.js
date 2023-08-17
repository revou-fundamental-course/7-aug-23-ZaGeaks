document.getElementById('hitung_luas').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('alas-input').value);
    const height = parseFloat(document.getElementById('tinggi-input').value);
  
    if (!isNaN(base) && !isNaN(height)) {
      const area = 0.5 * base * height;
      document.getElementById('hasil_luas').textContent = `Luas: ${area.toFixed(2)}`;
    } else {
      document.getElementById('hasil_luas').textContent = 'Input tidak valid';
    }
  });
  
  document.getElementById('reset_luas').addEventListener('click', function() {
    document.getElementById('alas-input').value = '';
    document.getElementById('tinggi-input').value = '';
    document.getElementById('hasil_luas').textContent = 'Luas: ';
  });
  document.getElementById('hitung_keliling').addEventListener('click', function() {
    const sisiA = parseFloat(document.getElementById('Sisi_AB').value);
    const sisiB = parseFloat(document.getElementById('Sisi_BC').value);
    const sisiC = parseFloat(document.getElementById('Sisi_CA').value);
  
    if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
      const keliling = sisiA + sisiB + sisiC;
      document.getElementById('hasil_keliling').textContent = `Keliling: ${keliling.toFixed(2)}`;
    } else {
      document.getElementById('hasil_keliling').textContent = 'Input tidak valid';
    }
  });
  
  document.getElementById('reset_keliling').addEventListener('click', function() {
    document.getElementById('Sisi_AB').value = '';
    document.getElementById('Sisi_BC').value = '';
    document.getElementById('Sisi_CA').value = '';
    document.getElementById('hasil_keliling').textContent = 'Keliling: ';
  });
  