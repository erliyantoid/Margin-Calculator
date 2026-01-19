function hitung() {
  const hpp = Number(document.getElementById("hpp").value);
  const marginRaw = Number(document.getElementById("margin").value);
  const diskonRaw = Number(document.getElementById("diskon").value);

  if (!hpp || !marginRaw) {
    alert("HPP dan Margin wajib diisi dengan angka!");
    return;
  }

  const margin = marginRaw / 100;
  const diskon = isNaN(diskonRaw) ? 0 : diskonRaw / 100;

  if (margin + diskon >= 1) {
    alert("Margin + Diskon tidak boleh 100% atau lebih!");
    return;
  }

  const hargaJual = hpp / (1 - margin - diskon);
  const hargaSetelahDiskon = hargaJual * (1 - diskon);
  const untung = hargaSetelahDiskon - hpp;
  const marginReal = (untung / hpp) * 100;

  const statusClass = untung > 0 ? "aman" : "rugi";
  const statusText = untung > 0 ? "🟢 AMAN" : "🔴 RUGI";

  const hasil = document.getElementById("hasil");
  hasil.className = `hasil ${statusClass}`;
  hasil.innerHTML = `
    <p><b>Status:</b> ${statusText}</p>
    <p>Harga Jual Aman: <b>Rp ${hargaJual.toLocaleString("id-ID")}</b></p>
    <p>Harga Setelah Diskon: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}</p>
    <p>Untung Bersih: <b>Rp ${untung.toLocaleString("id-ID")}</b></p>
    <p>Margin Real: <b>${marginReal.toFixed(2)}%</b></p>
  `;
}
