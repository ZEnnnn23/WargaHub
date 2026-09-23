# WargaHub

**Sistem Informasi & Layanan Administrasi Komunitas Terintegrasi WA dan AI**

WargaHub adalah platform manajemen komunitas RT/RW berbasis web yang menggabungkan integrasi WhatsApp (via Fonnte Gateway), AI Chatbot, pelaporan kejadian real-time, administrasi surat otomatis, dan marketplace UMKM lokal. Dirancang khusus untuk kebutuhan desa, kelurahan, dan lingkungan RT/RW di Indonesia.

---

## Fitur Utama

### Portal Warga
| Tab | Deskripsi |
|-----|-----------|
| Info & Agenda Desa | Melihat pengumuman terbaru dan agenda kegiatan lingkungan |
| Ajukan Surat AI | Pengajuan surat pengantar secara online dengan draf otomatis oleh AI |
| Lapor Kejadian | Formulir pelaporan masalah lingkungan dengan notifikasi WhatsApp otomatis |
| Pojok UMKM | Direktori produk dan usaha lokal warga yang terverifikasi |
| Status Pengajuan | Pantau status surat dan laporan yang sudah diajukan secara real-time |

### Dasbor Admin
| Tab | Deskripsi |
|-----|-----------|
| Ringkasan KPI | Overview statistik warga, laporan aktif, surat pending, dan UMKM |
| Pengumuman & Agenda | Kelola pengumuman baru dan tambah agenda kegiatan |
| Laporan Warga | Tinjau, proses, dan perbarui status laporan masuk |
| Review Surat AI | Human-in-the-loop review draf surat yang dibuat AI sebelum disetujui |
| Data Warga & UMKM | Tabel data warga terdaftar dan produk UMKM aktif |

### Fitur Pendukung
- **WhatsApp Broadcast Simulator** via Fonnte API: notifikasi otomatis ke warga saat ada pengumuman, laporan baru, atau perubahan status surat
- **WA Chatbot Simulator**: simulasi interaksi chatbot berbasis WhatsApp untuk warga
- **WA Gateway Log Modal**: pantau riwayat pesan broadcast yang dikirim
- **Surat Document Viewer**: pratinjau dokumen surat yang dibuat sistem
- **Mode Lansia**: tampilan yang lebih besar dan ramah untuk pengguna lanjut usia
- **Dark/Light Mode**: tema bisa disesuaikan dan tersimpan di localStorage
- **Toast Notification**: feedback real-time untuk setiap aksi yang dilakukan

---

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Icon Library | Lucide React |
| State Management | React Context API |
| Persistensi | localStorage (browser) |

---

## Struktur Proyek

```
WargaHub/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── AppContext.jsx        # Global state & semua action handler
    ├── data/
    │   └── initialData.js        # Data awal: warga, pengumuman, surat, UMKM, dll.
    └── components/
        ├── Navbar.jsx             # Header navigasi & toggle tema/mode
        ├── Preloader.jsx          # Splash screen saat pertama buka
        ├── WargaHubLogo.jsx       # Komponen logo
        ├── PortalWarga.jsx        # Tampilan utama untuk warga
        ├── DasborAdmin.jsx        # Dasbor untuk pengurus RT/RW
        ├── SuratAiWizard.jsx      # Wizard pengajuan surat dengan AI
        ├── LaporWargaForm.jsx     # Form pelaporan kejadian
        ├── PojokUmkm.jsx          # Halaman UMKM lokal
        ├── SuratDocumentViewer.jsx # Preview dokumen surat
        ├── WaChatbotSimulator.jsx  # Simulasi chatbot WhatsApp
        └── WaGatewayLogModal.jsx   # Log broadcast WA
```

---

## Cara Menjalankan

### Prasyarat
- Node.js >= 18
- npm atau yarn

### Instalasi

```bash
# Clone atau ekstrak proyek
cd WargaHub

# Install dependensi
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

### Build untuk Produksi

```bash
npm run build
```

Output build ada di folder `dist/`.

---

## Cara Pakai

### Sebagai Warga
1. Buka aplikasi, pilih tab sesuai kebutuhan di Portal Warga.
2. Ajukan surat melalui tab **Ajukan Surat AI**, isi formulir, dan tunggu notifikasi WhatsApp dari pengurus.
3. Laporkan kejadian di lingkungan melalui tab **Lapor Kejadian**.
4. Pantau status pengajuan di tab **Status Pengajuan**.

### Sebagai Admin/Pengurus
1. Klik tombol **Beralih ke Dasbor Admin** di navbar.
2. Tinjau laporan masuk di tab **Laporan Warga** dan perbarui statusnya.
3. Review dan setujui draf surat AI di tab **Review Surat AI**.
4. Buat pengumuman baru atau tambah agenda kegiatan.
5. Monitor log broadcast WhatsApp melalui tombol WA Gateway Log.

---

## Catatan

- Data aplikasi disimpan di `localStorage` browser masing-masing pengguna. Tidak ada backend/database eksternal dalam versi ini.
- Integrasi WhatsApp melalui Fonnte API bersifat simulasi di versi demo ini.
- AI draft surat menggunakan placeholder konten; untuk produksi perlu disambungkan ke LLM API (Gemini/GPT).
- Proyek ini open source dan gratis untuk digunakan oleh komunitas desa dan kelurahan di Indonesia.

---

## Lisensi

Open Source. Bebas digunakan untuk kebutuhan komunitas RT/RW, kelurahan, dan desa di seluruh Indonesia.
