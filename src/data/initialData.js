export const initialCommunityInfo = {
  name: "Komunitas RW 08 Kelurahan Sukamaju",
  subName: "Kecamatan Cilodong, Kota Depok",
  rtCount: 6,
  totalWarga: 485,
  totalKk: 142,
  pengurus: [
    { role: "Ketua RW", name: "Bpk. H. Bambang Sudirman", phone: "0812-3456-7890" },
    { role: "Sekretaris", name: "Ibu Ratna Pertiwi", phone: "0813-9876-5432" },
    { role: "Bendahara", name: "Bpk. Agus Rahardjo", phone: "0815-1122-3344" },
    { role: "Ketua RT 01", name: "Bpk. Hendra Wijaya", phone: "0817-2233-4455" },
    { role: "Ketua RT 02", name: "Bpk. Supriadi", phone: "0818-3344-5566" },
  ]
};

export const initialAnnouncements = [
  {
    id: "ann-1",
    title: "Penyaluran Bantuan Pangan & Kesehatan Posyandu Lansia",
    category: "Kesehatan",
    isPinned: true,
    date: "2026-09-22",
    author: "Sekretaris RW 08",
    content: "Diberitahukan kepada seluruh warga RW 08, khususnya para lansia dan ibu hamil, kegiatan Posyandu Lansia & Pembagian Vitamin rutin akan dilaksanakan pada Sabtu, 26 September 2026 pukul 08.00 WIB di Balai Warga. Mohon membawa buku kesehatan.",
    target: "Semua Warga",
    waBroadcastSent: true,
    sentTimestamp: "2026-09-22 09:15 WIB"
  },
  {
    id: "ann-2",
    title: "Kerja Bakti Massal Mengantisipasi Musim Hujan",
    category: "Lingkungan",
    isPinned: true,
    date: "2026-09-20",
    author: "Ketua RW 08",
    content: "Dalam rangka mencegah genangan air dan perindangan nyamuk DBD, warga diimbau mengikuti Kerja Bakti Pembersihan Selokan utama pada Minggu pagi pukul 06.30 WIB. Peralatan cangkul dan sapu disediakan RT masing-masing.",
    target: "Bapak-Bapak & Remaja",
    waBroadcastSent: true,
    sentTimestamp: "2026-09-20 14:00 WIB"
  },
  {
    id: "ann-3",
    title: "Pendataan Warga Baru & Pembaruan Kartu Keluarga",
    category: "Administrasi",
    isPinned: false,
    date: "2026-09-15",
    author: "Pengurus RT 03",
    content: "Bagi warga yang baru pindah domisili atau menambah anggota keluarga dalam 3 bulan terakhir, mohon memperbarui data melalui pengajuan surat online WargaHub atau melaporkan ke ketua RT setempat.",
    target: "Warga Baru / Pindahan",
    waBroadcastSent: true,
    sentTimestamp: "2026-09-15 10:30 WIB"
  }
];

export const initialAgendas = [
  {
    id: "age-1",
    title: "Senam Bugar Lansia & Cek Kesehatan Gratis",
    date: "2026-09-27",
    time: "06:00 - 08:30 WIB",
    location: "Lapangan Serbaguna RT 02",
    organizer: "Kader Posyandu Lansia",
    category: "Kesehatan",
    description: "Senam aerobic sehat untuk usia 50 tahun ke atas dilanjutkan dengan fasilitas cek gula darah & asam urat gratis oleh puskesmas pembantu.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    participantsCount: 42
  },
  {
    id: "age-2",
    title: "Musyawarah Rapat Koordinasi & Rembuk Warga",
    date: "2026-09-29",
    time: "19:30 - 21:30 WIB",
    location: "Balai Warga RW 08",
    organizer: "Pengurus Karang Taruna & RT",
    category: "Musyawarah",
    description: "Rapat koordinasi warga untuk penyusunan jadwal ronda malam baru serta integrasi sistem keamanan CCTV portal warga.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    participantsCount: 28
  },
  {
    id: "age-3",
    title: "Pelatihan Wirausaha Digital & UMKM Komunitas",
    date: "2026-10-03",
    time: "09:00 - 12:00 WIB",
    location: "Aula Pertemuan Kantor Desa",
    organizer: "Tim Pojok UMKM WargaHub",
    category: "Pemberdayaan",
    description: "Pendampingan pembuatan foto produk menarik & strategi jualan online via WhatsApp Business untuk pelaku usaha warga.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    participantsCount: 19
  }
];

export const initialReports = [
  {
    id: "REP-2026-089",
    reporterName: "Pak Suparno",
    reporterPhone: "0812-8877-6655",
    rtRw: "RT 03 / RW 08",
    title: "Lampu Penerangan Jalan Umum (PJU) Padam di Gang Masjid",
    category: "Fasilitas Umum",
    description: "Sudah 3 malam lampu PJU di dekat pertigaan Gang Masjid mati total. Jalan menjadi sangat gelap dan berpotensi memicu kerawanan malam hari.",
    location: "Jl. Dahlia 2 Depan Masjid Al-Ikhlas",
    photoUrl: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&auto=format&fit=crop&q=80",
    status: "diproses",
    dateSubmitted: "2026-09-22 19:40",
    adminResponse: "Laporan telah diteruskan ke petugas PLN & seksi sarpras RT. Penggantian bohlam dijadwalkan besok sore.",
    updatedAt: "2026-09-23 08:30"
  },
  {
    id: "REP-2026-088",
    reporterName: "Ibu Maryam",
    reporterPhone: "0813-1122-3399",
    rtRw: "RT 01 / RW 08",
    title: "Pohon Rindang Dahan Lapuk Menutup Kabel Listrik",
    category: "Lingkungan",
    description: "Dahan pohon mangga tua di pinggir jalan utama mulai lapuk dan menyangkut di kabel optik. Khawatir tumbang saat angin kencang.",
    location: "Jl. Melati Utama RT 01",
    photoUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=80",
    status: "selesai",
    dateSubmitted: "2026-09-18 10:15",
    adminResponse: "Pohon telah dipangkas bersama oleh tim kerja bakti RT 01 pada hari Minggu.",
    updatedAt: "2026-09-20 12:00"
  },
  {
    id: "REP-2026-090",
    reporterName: "Budi Santoso",
    reporterPhone: "0857-4455-6677",
    rtRw: "RT 05 / RW 08",
    title: "Penumpukan Sampah Liar di Saluran Air Dekat Lapangan",
    category: "Kebersihan",
    description: "Ada tumpukan sampah plastik dan limbah rumah tangga yang tersumbat di gorong-gorong timur. Mengalir lambat saat hujan deras.",
    location: "Ujung Lapangan Serbaguna RT 05",
    photoUrl: "https://images.unsplash.com/photo-1611284446314-60a55ac0d494?w=600&auto=format&fit=crop&q=80",
    status: "diajukan",
    dateSubmitted: "2026-09-23 07:10",
    adminResponse: "",
    updatedAt: "2026-09-23 07:10"
  }
];

export const initialLetterTypes = [
  {
    id: "surat-domisili",
    name: "Surat Keterangan Domisili",
    code: "SKD",
    description: "Surat pengantar pernyataan tempat tinggal resmi warga di lingkungan RT/RW setempat.",
    requirements: ["Foto KTP", "Foto Kartu Keluarga (KK)", "Alamat Domisili Lengkap"],
    estimatedDays: "1 Hari Kerja"
  },
  {
    id: "surat-skck",
    name: "Surat Pengantar SKCK",
    code: "SKCK",
    description: "Pengantar untuk penerbitan Surat Keterangan Catatan Kepolisian di Polsek/Polres.",
    requirements: ["Foto KTP", "Foto KK", "Tujuan Pengajuan (Lamaran Kerja/Pendidikan)"],
    estimatedDays: "1 Hari Kerja"
  },
  {
    id: "surat-sktm",
    name: "Surat Keterangan Tidak Mampu (SKTM)",
    code: "SKTM",
    description: "Surat rekomendasi bantuan biaya sekolah, beasiswa, atau pengobatan rumah sakit.",
    requirements: ["Foto KTP Orang Tua/Pemohon", "Foto KK", "Nama Sekolah / Rumah Sakit Tujuan"],
    estimatedDays: "1 Hari Kerja"
  },
  {
    id: "surat-sku",
    name: "Surat Keterangan Usaha (SKU)",
    code: "SKU",
    description: "Keterangan kepemilikan dan lokasi usaha UMKM di wilayah RT/RW setempat.",
    requirements: ["Foto KTP", "Nama Usaha", "Jenis Usaha & Alamat Usaha"],
    estimatedDays: "1-2 Hari Kerja"
  },
  {
    id: "surat-nikah",
    name: "Surat Pengantar Nikah (N1-N4)",
    code: "SPN",
    description: "Surat pengantar untuk pendaftaran pernikahan di Kantor Urusan Agama (KUA).",
    requirements: ["Foto KTP Calon Pengantin", "Foto Akta Kelahiran", "Foto KK"],
    estimatedDays: "2 Hari Kerja"
  }
];

export const initialLetterRequests = [
  {
    id: "SRT-2026-0042",
    typeId: "surat-domisili",
    typeName: "Surat Keterangan Domisili",
    applicantName: "Ahmad Dahlan",
    nik: "3276012304920005",
    waPhone: "0812-9988-7766",
    rtRw: "RT 02 / RW 08",
    purpose: "Persyaratan Kelengkapan Administrasi Bank & Pembukaan Rekening Usaha",
    status: "perlu_review",
    channel: "WhatsApp AI Chatbot",
    submittedAt: "2026-09-23 11:20",
    aiDraftContent: {
      nomorSurat: "470 / 082 / RT.02-RW.08 / IX / 2026",
      nama: "Ahmad Dahlan",
      nik: "3276012304920005",
      tempatTanggalLahir: "Depok, 14 April 1992",
      pekerjaan: "Wiraswasta",
      alamat: "Jl. Kamboja No. 12 RT 02 RW 08 Kel. Sukamaju",
      keterangan: "Bahwa nama tersebut di atas adalah benar warga yang berdomisili dan menetap di lingkungan RT 02 RW 08 Kelurahan Sukamaju.",
      tujuan: "Persyaratan Kelengkapan Administrasi Bank & Pembukaan Rekening Usaha",
      tanggalSurat: "23 September 2026"
    },
    adminNotes: "AI telah mengekstrak NIK dan KK warga secara akurat. Menunggu konfirmasi tanda tangan Ketua RT."
  },
  {
    id: "SRT-2026-0041",
    typeId: "surat-skck",
    typeName: "Surat Pengantar SKCK",
    applicantName: "Siti Rahmawati",
    nik: "3276015509980002",
    waPhone: "0856-7788-9900",
    rtRw: "RT 04 / RW 08",
    purpose: "Melamar Pekerjaan sebagai Tenaga Administrasi di BUMN",
    status: "disetujui",
    channel: "Portal Web Warga",
    submittedAt: "2026-09-21 14:15",
    aiDraftContent: {
      nomorSurat: "300 / 079 / RT.04-RW.08 / IX / 2026",
      nama: "Siti Rahmawati",
      nik: "3276015509980002",
      tempatTanggalLahir: "Depok, 15 September 1998",
      pekerjaan: "Karyawan Swasta",
      alamat: "Jl. Kenanga No. 45 RT 04 RW 08 Kel. Sukamaju",
      keterangan: "Selama bertempat tinggal di wilayah kami, bersangkutan berkelakuan baik, tidak pernah terlibat perkara kriminal, dan taat pada aturan warga.",
      tujuan: "Melamar Pekerjaan sebagai Tenaga Administrasi di BUMN",
      tanggalSurat: "21 September 2026"
    },
    adminNotes: "Disetujui oleh Sekretaris RW 08. Surat siap diunduh dalam format PDF resmi."
  }
];

export const initialUmkmProducts = [
  {
    id: "umkm-1",
    storeName: "Dapur Mendoan Bu Ani",
    ownerName: "Ibu Sri Mulyani (Bu Ani)",
    category: "Kuliner & Makanan",
    rating: 4.9,
    reviewsCount: 38,
    phone: "6281299881122",
    rtRw: "RT 02 / RW 08",
    productName: "Keripik Tempe Mendoan Super Renyah & Aneka Sambal",
    price: 18000,
    unit: "Pouch 250g",
    description: "Keripik tempe kedelai murni pilihan dipadu dengan resep bumbu mendoan khas Banyumas. Bebas pengawet, dijamin gurih dan renyah cocok untuk camilan keluarga.",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    isVerified: true
  },
  {
    id: "umkm-2",
    storeName: "Servis AC & Elektronik Pak Budi",
    ownerName: "Bpk. Budi Hermanto",
    category: "Jasa & Perbaikan",
    rating: 4.8,
    reviewsCount: 52,
    phone: "6281377665544",
    rtRw: "RT 01 / RW 08",
    productName: "Jasa Cuci AC, Tambah Freon, & Perbaikan Mesin Cuci",
    price: 75000,
    unit: "Per Unit AC",
    description: "Melayani panggil ke rumah warga RW 08 & sekitarnya. Pengerjaan rapi, bersih, dan berpengalaman lebih dari 10 tahun. Garansi dingin 1 bulan.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80",
    isVerified: true
  },
  {
    id: "umkm-3",
    storeName: "Jamu Herbal Lansia Mbah Suwarti",
    ownerName: "Mbah Suwarti",
    category: "Kesehatan & Herbal",
    rating: 5.0,
    reviewsCount: 29,
    phone: "6281512344321",
    rtRw: "RT 03 / RW 08",
    productName: "Jamu Kunyit Asam & Beras Kencur Asli Rimpang Segar",
    price: 12000,
    unit: "Botol 500ml",
    description: "Dibuat dari 100% rempah rimpang alami tanpa pemanis buatan. Sangat cocok menjaga kebugaran tubuh, peredaran darah, dan pegal linu lansia.",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    isVerified: true
  },
  {
    id: "umkm-4",
    storeName: "Jahit & Vermak Busana Kak Rina",
    ownerName: "Rina Astuti",
    category: "Pakaian & Tekstil",
    rating: 4.7,
    reviewsCount: 19,
    phone: "6281890908080",
    rtRw: "RT 04 / RW 08",
    productName: "Jahit Seragam, Gamis, Celana Jeans & Vermak Kilat",
    price: 25000,
    unit: "Mulai dari",
    description: "Menerima pembuatan pakaian baru, potong celana, ganti resleting, dan vermak baju keluarga dengan jahitan rapi serta waktu pengerjaan cepat.",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80",
    isVerified: true
  }
];

export const initialCitizens = [
  { id: "W-001", name: "H. Bambang Sudirman", nik: "3276011203650001", rtRw: "RT 01 / RW 08", role: "Pengurus (RW)", waStatus: "Aktif", phone: "0812-3456-7890", ageCategory: "Lansia" },
  { id: "W-002", name: "Ratna Pertiwi", nik: "3276014507880004", rtRw: "RT 01 / RW 08", role: "Pengurus (Sekretaris)", waStatus: "Aktif", phone: "0813-9876-5432", ageCategory: "Dewasa" },
  { id: "W-003", name: "Ahmad Dahlan", nik: "3276012304920005", rtRw: "RT 02 / RW 08", role: "Warga", waStatus: "Aktif", phone: "0812-9988-7766", ageCategory: "Dewasa" },
  { id: "W-004", name: "Sri Mulyani (Bu Ani)", nik: "3276015501700008", rtRw: "RT 02 / RW 08", role: "Pelaku UMKM", waStatus: "Aktif", phone: "0812-9988-1122", ageCategory: "Lansia" },
  { id: "W-005", name: "Budi Hermanto", nik: "3276011110820003", rtRw: "RT 01 / RW 08", role: "Pelaku UMKM", waStatus: "Aktif", phone: "0813-7766-5544", ageCategory: "Dewasa" },
  { id: "W-006", name: "Mbah Suwarti", nik: "3276016608500001", rtRw: "RT 03 / RW 08", role: "Pelaku UMKM", waStatus: "Aktif", phone: "0815-1234-4321", ageCategory: "Lansia" },
];

export const initialWaLogs = [
  {
    id: "LOG-9941",
    timestamp: "2026-09-23 11:20:14",
    recipientPhone: "0812-9988-7766",
    recipientName: "Ahmad Dahlan",
    messageType: "AI Assistant Response",
    gateway: "Fonnte WhatsApp API",
    status: "Delivered",
    redisQueueId: "q-req-8819",
    content: "Halo Pak Ahmad! Permohonan Surat Keterangan Domisili Anda telah berhasil dibuatkan draf oleh AI WargaHub dan diteruskan ke Pengurus RT 02. Anda dapat memantau statusnya di portal."
  },
  {
    id: "LOG-9940",
    timestamp: "2026-09-22 09:15:02",
    recipientPhone: "Broadcast Group (485 Warga)",
    recipientName: "Seluruh Warga RW 08",
    messageType: "Pengumuman Broadcast",
    gateway: "Fonnte WhatsApp API",
    status: "Delivered (100%)",
    redisQueueId: "q-bcast-7712",
    content: "[PENGUMUMAN WARGA] Penyaluran Bantuan Pangan & Kesehatan Posyandu Lansia akan dilaksanakan Sabtu, 26 Sept 2026 di Balai Warga."
  }
];
