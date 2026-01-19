function hitung() {
  const hpp = parseFloat(document.getElementById("hpp").value);
  const marginInput = document.getElementById("margin").value;
  const diskonInput = document.getElementById("diskon").value;

  if (isNaN(hpp) || isNaN(marginInput)) {
    alert("HPP dan Margin wajib diisi!");
    return;
  }

  const margin = parseFloat(marginInput) / 100;
  const diskon = diskonInput === "" ? 0 : parseFloat(diskonInput) / 100;

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

  document.getElementById("hasil").className = `hasil ${statusClass}`;
  document.getElementById("hasil").innerHTML = `
    <p><b>Status:</b> ${statusText}</p>
    <p>Harga Jual Aman: <b>Rp ${hargaJual.toLocaleString("id-ID")}</b></p>
    <p>Harga Setelah Diskon: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}</p>
    <p>Untung Bersih: <b>Rp ${untung.toLocaleString("id-ID")}</b></p>
    <p>Margin Real: <b>${marginReal.toFixed(2)}%</b></p>
  `;
}
