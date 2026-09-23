import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialCommunityInfo,
  initialAnnouncements,
  initialAgendas,
  initialReports,
  initialLetterTypes,
  initialLetterRequests,
  initialUmkmProducts,
  initialCitizens,
  initialWaLogs
} from '../data/initialData';

const AppContext = createContext();

const categoryDefaultImages = {
  'Kesehatan': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  'Musyawarah': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  'Pemberdayaan': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  'Lingkungan': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
};

export const AppProvider = ({ children }) => {
  // Theme state: 'light' (default) or 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('wargahub_theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('wargahub_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Current view mode: 'warga' or 'admin'
  const [currentView, setCurrentView] = useState('warga');
  const [wargaActiveTab, setWargaActiveTab] = useState('home');
  const [adminActiveTab, setAdminActiveTab] = useState('overview');
  const [isLansiaMode, setIsLansiaMode] = useState(false);

  const [communityInfo] = useState(initialCommunityInfo);
  
  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem('wargahub_announcements');
    return saved ? JSON.parse(saved) : initialAnnouncements;
  });

  // Always attach correct distinct imageUrl to agendas
  const [agendas, setAgendas] = useState(() => {
    const saved = localStorage.getItem('wargahub_agendas');
    if (!saved) return initialAgendas;
    try {
      const parsed = JSON.parse(saved);
      return parsed.map((item, idx) => ({
        ...item,
        imageUrl: item.imageUrl || initialAgendas[idx % initialAgendas.length]?.imageUrl || categoryDefaultImages[item.category] || categoryDefaultImages['Kesehatan']
      }));
    } catch (e) {
      return initialAgendas;
    }
  });

  const [reports, setReports] = useState(() => {
    const saved = localStorage.getItem('wargahub_reports');
    return saved ? JSON.parse(saved) : initialReports;
  });

  const [letterTypes] = useState(initialLetterTypes);

  const [letterRequests, setLetterRequests] = useState(() => {
    const saved = localStorage.getItem('wargahub_letter_requests');
    return saved ? JSON.parse(saved) : initialLetterRequests;
  });

  const [umkmProducts, setUmkmProducts] = useState(() => {
    const saved = localStorage.getItem('wargahub_umkm_products');
    return saved ? JSON.parse(saved) : initialUmkmProducts;
  });

  const [citizens] = useState(initialCitizens);

  const [waLogs, setWaLogs] = useState(() => {
    const saved = localStorage.getItem('wargahub_wa_logs');
    return saved ? JSON.parse(saved) : initialWaLogs;
  });

  const [isWaChatbotOpen, setIsWaChatbotOpen] = useState(false);
  const [isWaLogModalOpen, setIsWaLogModalOpen] = useState(false);
  const [viewingSuratDoc, setViewingSuratDoc] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem('wargahub_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('wargahub_agendas', JSON.stringify(agendas));
  }, [agendas]);

  useEffect(() => {
    localStorage.setItem('wargahub_reports', JSON.stringify(reports));
  }, [reports]);

  useEffect(() => {
    localStorage.setItem('wargahub_letter_requests', JSON.stringify(letterRequests));
  }, [letterRequests]);

  useEffect(() => {
    localStorage.setItem('wargahub_umkm_products', JSON.stringify(umkmProducts));
  }, [umkmProducts]);

  useEffect(() => {
    localStorage.setItem('wargahub_wa_logs', JSON.stringify(waLogs));
  }, [waLogs]);

  const addToast = (message, type = 'success', title = 'Notifikasi') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const simulateWaBroadcast = (title, recipientText = 'Seluruh Warga (485 Warga)') => {
    const newLog = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      recipientPhone: recipientText,
      recipientName: recipientText,
      messageType: 'Notifikasi Broadcast WA',
      gateway: 'Fonnte WhatsApp API',
      status: 'Delivered (100%)',
      redisQueueId: `q-bcast-${Math.floor(1000 + Math.random() * 9000)}`,
      content: `[WARGAHUB NOTIFIKASI] ${title}`
    };
    setWaLogs((prev) => [newLog, ...prev]);
    addToast(`Notifikasi WhatsApp berhasil dibroadcast ke ${recipientText} via Fonnte Gateway!`, 'success', 'WhatsApp Broadcast');
  };

  const addReport = (newReportData) => {
    const id = `REP-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newReport = {
      id,
      ...newReportData,
      status: 'diajukan',
      dateSubmitted: new Date().toISOString().replace('T', ' ').substring(0, 16),
      adminResponse: '',
      updatedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    setReports((prev) => [newReport, ...prev]);
    simulateWaBroadcast(`Laporan Baru #${id} ("${newReport.title}") telah diterima oleh Sistem.`, newReport.reporterPhone);
    addToast(`Laporan #${id} berhasil dikirim! Status dapat dipantau di menu status.`, 'success');
    return newReport;
  };

  const updateReportStatus = (id, newStatus, adminResponse = '') => {
    setReports((prev) =>
      prev.map((rep) =>
        rep.id === id
          ? {
              ...rep,
              status: newStatus,
              adminResponse: adminResponse || rep.adminResponse,
              updatedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
            }
          : rep
      )
    );
    addToast(`Status laporan #${id} diperbarui menjadi "${newStatus.toUpperCase()}"`, 'info');
    const report = reports.find(r => r.id === id);
    if (report) {
      simulateWaBroadcast(`Pembaruan Laporan #${id}: Status kini "${newStatus.toUpperCase()}". Catatan Admin: ${adminResponse || 'Diproses oleh pengurus'}`, report.reporterPhone);
    }
  };

  const addLetterRequest = (requestData) => {
    const id = `SRT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const letterTypeObj = letterTypes.find(t => t.id === requestData.typeId);
    const aiDraftContent = {
      nomorSurat: `${Math.floor(100 + Math.random() * 800)} / ${Math.floor(10 + Math.random() * 80)} / RT.02-RW.08 / IX / 2026`,
      nama: requestData.applicantName,
      nik: requestData.nik || '3276019908870001',
      tempatTanggalLahir: requestData.ttl || 'Depok, 12 Mei 1994',
      pekerjaan: requestData.pekerjaan || 'Wiraswasta / Warga',
      alamat: requestData.alamat || `RT ${requestData.rtRw || '02/08'} Kel. Sukamaju`,
      keterangan: `Bahwa nama yang tertera di atas adalah benar warga kami yang memohon penerbitan ${letterTypeObj ? letterTypeObj.name : 'Surat Pengantar'} untuk keperluan resmi.`,
      tujuan: requestData.purpose,
      tanggalSurat: '23 September 2026'
    };

    const newReq = {
      id,
      ...requestData,
      typeName: letterTypeObj ? letterTypeObj.name : 'Surat Pengantar',
      status: 'perlu_review',
      channel: requestData.channel || 'Portal Web Warga',
      submittedAt: nowStr,
      aiDraftContent,
      adminNotes: 'Draf dokumen dibuat otomatis oleh AI (Gemini/GPT LLM). Menunggu tinjauan & tanda tangan admin RT/RW.'
    };

    setLetterRequests((prev) => [newReq, ...prev]);
    simulateWaBroadcast(`Permohonan ${newReq.typeName} #${id} berhasil dibuat oleh AI. Menunggu persetujuan admin.`, newReq.waPhone || 'Warga');
    addToast(`Permohonan ${newReq.typeName} berhasil diproses oleh AI! Draf telah dibuat dan diteruskan ke Pengurus.`, 'success');
    return newReq;
  };

  const updateLetterStatus = (id, newStatus, adminNotes = '') => {
    setLetterRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? {
              ...req,
              status: newStatus,
              adminNotes: adminNotes || req.adminNotes
            }
          : req
      )
    );
    addToast(`Status permohonan surat #${id} diperbarui: "${newStatus.toUpperCase()}"`, 'info');
    const req = letterRequests.find(r => r.id === id);
    if (req) {
      simulateWaBroadcast(`Status Permohonan Surat #${id} (${req.typeName}) kini "${newStatus.toUpperCase()}". ${newStatus === 'disetujui' ? 'Dokumen siap diunduh!' : ''}`, req.waPhone || 'Warga');
    }
  };

  const addUmkmProduct = (productData) => {
    const id = `umkm-${Date.now()}`;
    const newProduct = {
      id,
      ...productData,
      rating: 5.0,
      reviewsCount: 1,
      isVerified: true
    };
    setUmkmProducts((prev) => [newProduct, ...prev]);
    addToast(`Usaha / Produk "${newProduct.productName}" berhasil ditambahkan ke Pojok UMKM!`, 'success');
  };

  const addAnnouncement = (data) => {
    const id = `ann-${Date.now()}`;
    const newAnn = {
      id,
      ...data,
      date: new Date().toISOString().split('T')[0],
      author: 'Pengurus RW 08',
      waBroadcastSent: true,
      sentTimestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    setAnnouncements((prev) => [newAnn, ...prev]);
    simulateWaBroadcast(`[PENGUMUMAN BARU] ${newAnn.title}: ${newAnn.content.substring(0, 80)}...`);
  };

  const addAgenda = (data) => {
    const id = `age-${Date.now()}`;
    const newAge = {
      id,
      ...data,
      imageUrl: data.imageUrl || categoryDefaultImages[data.category] || categoryDefaultImages['Kesehatan'],
      participantsCount: 1
    };
    setAgendas((prev) => [newAge, ...prev]);
    simulateWaBroadcast(`[AGENDA BARU] ${newAge.title} pada ${newAge.date} pukul ${newAge.time} di ${newAge.location}.`);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentView,
        setCurrentView,
        wargaActiveTab,
        setWargaActiveTab,
        adminActiveTab,
        setAdminActiveTab,
        isLansiaMode,
        setIsLansiaMode,
        communityInfo,
        announcements,
        agendas,
        reports,
        letterTypes,
        letterRequests,
        umkmProducts,
        citizens,
        waLogs,
        isWaChatbotOpen,
        setIsWaChatbotOpen,
        isWaLogModalOpen,
        setIsWaLogModalOpen,
        viewingSuratDoc,
        setViewingSuratDoc,
        toasts,
        addToast,
        removeToast,
        simulateWaBroadcast,
        addReport,
        updateReportStatus,
        addLetterRequest,
        updateLetterStatus,
        addUmkmProduct,
        addAnnouncement,
        addAgenda
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
