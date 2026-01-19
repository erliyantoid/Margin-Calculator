function toggleTargetHarga() {
  const mode = document.getElementById("mode").value;
  document.getElementById("targetHargaBox").style.display =
    mode === "target" ? "block" : "none";
}

function hitung() {
  const hpp = Number(document.getElementById("hpp").value);
  const targetPersen = Number(document.getElementById("margin").value);
  const diskonRaw = Number(document.getElementById("diskon").value);
  const targetHarga = Number(document.getElementById("targetHarga").value);
  const mode = document.getElementById("mode").value;

  if (!hpp) {
    alert("HPP wajib diisi!");
    return;
  }

  const diskon = isNaN(diskonRaw) ? 0 : diskonRaw / 100;

  let hargaJual = 0;
  let hargaSetelahDiskon = 0;
  let untung = 0;
  let realMargin = 0;

  // MODE 1: MARKUP %
  if (mode === "markup") {
    if (!targetPersen) {
      alert("Target margin (%) wajib diisi!");
      return;
    }
    hargaJual = hpp * (1 + targetPersen / 100);
  }

  // MODE 2: MARGIN AMAN %
  if (mode === "margin") {
    if (!targetPersen) {
      alert("Target margin (%) wajib diisi!");
      return;
    }
    const persen = targetPersen / 100;
    if (persen + diskon >= 1) {
      alert("Margin + Diskon tidak boleh 100% atau lebih!");
      return;
    }
    hargaJual = hpp / (1 - persen - diskon);
  }

  // MODE 3: TARGET HARGA Rp
  if (mode === "target") {
    if (!targetHarga) {
      alert("Target harga wajib diisi!");
      return;
    }
    hargaJual = targetHarga;
  }

  hargaSetelahDiskon = hargaJual * (1 - diskon);
  untung = hargaSetelahDiskon - hpp;
  realMargin = (untung / hpp) * 100;

  const statusClass = untung > 0 ? "aman" : "rugi";
  const statusText = untung > 0 ? "🟢 AMAN" : "🔴 RUGI";

  const hasil = document.getElementById("hasil");
  hasil.className = `hasil ${statusClass}`;
  hasil.innerHTML = `
    <p><b>Mode:</b> ${mode.toUpperCase()}</p>
    <p><b>Status:</b> ${statusText}</p>
    <p>Harga Jual: <b>Rp ${hargaJual.toLocaleString("id-ID")}</b></p>
    <p>Harga Setelah Diskon: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}</p>
    <p>Untung Bersih: <b>Rp ${untung.toLocaleString("id-ID")}</b></p>
    <p>Real Margin: <b>${realMargin.toFixed(2)}%</b></p>
  `;
}
