function hitung() {
  const hpp = parseFloat(document.getElementById("hpp").value);
  const margin = parseFloat(document.getElementById("margin").value) / 100;
  const diskon = parseFloat(document.getElementById("diskon").value) / 100;

  const hargaJual = hpp / (1 - margin - diskon);
  const hargaSetelahDiskon = hargaJual * (1 - diskon);
  const untung = hargaSetelahDiskon - hpp;

  document.getElementById("hasil").innerHTML = `
    <p>Harga Jual Aman: <b>Rp ${hargaJual.toFixed(0)}</b></p>
    <p>Harga Setelah Diskon: Rp ${hargaSetelahDiskon.toFixed(0)}</p>
    <p>Untung Bersih: <b>Rp ${untung.toFixed(0)}</b></p>
  `;
}
