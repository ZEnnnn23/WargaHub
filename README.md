# WargaHub

**Sistem Informasi & Layanan Administrasi Komunitas Terintegrasi WA dan AI**

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Prototype_Ready-success)

> **🔴 LIVE DEMO:** [https://wargahub.vercel.app](https://wargahub.vercel.app)

WargaHub adalah platform manajemen komunitas RT/RW berbasis web yang menggabungkan integrasi WhatsApp (via Fonnte Gateway), AI Chatbot, pelaporan kejadian real-time, administrasi surat otomatis, dan marketplace UMKM lokal. Dirancang khusus untuk kebutuhan desa, kelurahan, dan lingkungan RT/RW di Indonesia.

---

## 🌍 Sustainable Development Goals (SDGs) Alignment

Proyek ini dikembangkan untuk mendukung pencapaian target global SDGs, khususnya:

* **SDG 8 (Decent Work & Economic Growth):** Melalui fitur Pojok UMKM yang membuka etalase digital tanpa biaya bagi pelaku usaha mikro lokal.
* **SDG 10 (Reduced Inequalities):** Melalui fitur *Chatbot* WA & Mode Lansia yang memastikan inklusivitas digital bagi warga lanjut usia.
* **SDG 11 (Sustainable Cities & Communities):** Melalui fitur pelaporan warga dan manajemen agenda yang terpusat.
* **SDG 16 (Peace, Justice & Strong Institutions):** Melalui transparansi status pengajuan surat dan administrasi tata kelola yang terotomatisasi.

---

## ✨ Fitur Utama

### Portal Warga

| Tab | Deskripsi |
|---|---|
| **Info & Agenda Desa** | Melihat pengumuman terbaru dan agenda kegiatan lingkungan |
| **Ajukan Surat AI** | Pengajuan surat pengantar secara online dengan draf otomatis oleh AI |
| **Lapor Kejadian** | Formulir pelaporan masalah lingkungan dengan notifikasi WhatsApp otomatis |
| **Pojok UMKM** | Direktori produk dan usaha lokal warga yang terverifikasi |
| **Status Pengajuan** | Pantau status surat dan laporan yang sudah diajukan secara real-time |

### Dasbor Admin

| Tab | Deskripsi |
|---|---|
| **Ringkasan KPI** | Overview statistik warga, laporan aktif, surat pending, dan UMKM |
| **Pengumuman & Agenda** | Kelola pengumuman baru dan tambah agenda kegiatan |
| **Laporan Warga** | Tinjau, proses, dan perbarui status laporan masuk |
| **Review Surat AI** | Human-in-the-loop review draf surat yang dibuat AI sebelum disetujui |
| **Data Warga & UMKM** | Tabel data warga terdaftar dan produk UMKM aktif |

### Fitur Pendukung

* **WhatsApp Broadcast Simulator:** Notifikasi otomatis ke warga saat ada pengumuman, laporan baru, atau perubahan status surat.
* **WA Chatbot Simulator:** Simulasi interaksi chatbot berbasis WhatsApp untuk warga lansia.
* **WA Gateway Log Modal:** Pantau riwayat pesan broadcast yang dikirim.
* **Surat Document Viewer:** Pratinjau dokumen surat yang dibuat sistem.
* **Mode Lansia:** Tampilan yang lebih besar dan ramah untuk pengguna lanjut usia.
* **Dark/Light Mode:** Tema bisa disesuaikan dan tersimpan di `localStorage`.

---

## 🛠 Tech Stack

| Kategori | Teknologi |
|---|---|
| **Framework** | React 18 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS v4 |
| **Icon Library** | Lucide React |
| **State Management** | React Context API |
| **Persistensi** | localStorage (browser) |

---

## 📂 Struktur Proyek Terpenting

```text
WargaHub/
├── src/
│   ├── context/
│   │   └── AppContext.jsx       # Global state & logika bisnis utama
│   ├── data/
│   │   └── initialData.js       # Database dummy (warga, laporan, UMKM)
│   └── components/
│       ├── DasborAdmin.jsx      # Halaman khusus perangkat desa
│       ├── PortalWarga.jsx      # Halaman utama warga
│       ├── SuratAiWizard.jsx    # Algoritma wizard pengajuan AI
│       └── WaChatbotSimulator.jsx # Simulasi integrasi Fonnte API & NLP
```

---

## 🚀 Cara Menjalankan Secara Lokal

**Prasyarat**

* Node.js >= 18
* npm atau yarn

**Instalasi**

```bash
# 1. Clone repositori ini
git clone https://github.com/ZEnnnn23/WargaHub.git

# 2. Masuk ke direktori proyek
cd WargaHub

# 3. Install seluruh dependensi
npm install

# 4. Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` atau `http://localhost:3000`.

**Build untuk Produksi**

```bash
npm run build
```

Output build akan digenerasi di dalam folder `dist/`.

---

## 📝 Catatan Teknis

* Data aplikasi saat ini disimpan murni di `localStorage` peramban klien. Tidak ada *backend* eksternal untuk kemudahan peninjauan purwarupa (*prototype*).
* Integrasi WhatsApp melalui Fonnte API bersifat simulasi terpusat pada komponen simulator.
* Draf AI menggunakan templat simulasi statis; untuk produksi nyata, arsitektur ini sudah siap dihubungkan langsung ke *endpoint* REST API Gemini/OpenAI.

---

## 👥 Pengembang

Dikembangkan sebagai pengajuan proposal untuk **GAYATAMA 5: International Web Technology Competition 2026**.

* **Ketua Tim:** Aditya Rizquilah
* **Anggota Tim:** Fadhillah Muhammad Nur Hafiz
* **Institusi:** Universitas Negeri Surabaya

**Lisensi:** Open Source. Bebas diadaptasi untuk kebutuhan komunitas digital di seluruh Indonesia.
