function hitung() {
  const hpp = Number(document.getElementById("hpp").value);
  const target = Number(document.getElementById("margin").value);
  const diskonRaw = Number(document.getElementById("diskon").value);
  const mode = document.getElementById("mode").value;

  if (!hpp || !target) {
    alert("HPP dan Target wajib diisi angka!");
    return;
  }

  const diskon = isNaN(diskonRaw) ? 0 : diskonRaw / 100;
  const persen = target / 100;

  let hargaJual, hargaSetelahDiskon, untung, realMargin;

  if (mode === "markup") {
    // MODE A
    hargaJual = hpp * (1 + persen);
    hargaSetelahDiskon = hargaJual * (1 - diskon);
    untung = hargaSetelahDiskon - hpp;
    realMargin = (untung / hargaJual) * 100;
  } else {
    // MODE B
    if (persen + diskon >= 1) {
      alert("Margin + Diskon tidak boleh 100% atau lebih!");
      return;
    }
    hargaJual = hpp / (1 - persen - diskon);
    hargaSetelahDiskon = hargaJual * (1 - diskon);
    untung = hargaSetelahDiskon - hpp;
    realMargin = (untung / hpp) * 100;
  }

  const statusClass = untung > 0 ? "aman" : "rugi";
  const statusText = untung > 0 ? "🟢 AMAN" : "🔴 RUGI";

  const hasil = document.getElementById("hasil");
  hasil.className = `hasil ${statusClass}`;
  hasil.innerHTML = `
    <p><b>Mode:</b> ${mode === "markup" ? "Markup (HPP + %)" : "Margin Aman"}</p>
    <p><b>Status:</b> ${statusText}</p>
    <p>Harga Jual: <b>Rp ${hargaJual.toLocaleString("id-ID")}</b></p>
    <p>Harga Setelah Diskon: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}</p>
    <p>Untung Bersih: <b>Rp ${untung.toLocaleString("id-ID")}</b></p>
    <p>Real Margin: <b>${realMargin.toFixed(2)}%</b></p>
  `;
}
