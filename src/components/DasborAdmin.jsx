import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Users,
  AlertTriangle,
  FileText,
  Store,
  Send,
  Plus,
  CheckCircle2,
  Eye,
  Megaphone,
  Calendar,
  Activity,
  Bot,
  BarChart3
} from 'lucide-react';

export default function DasborAdmin() {
  const {
    adminActiveTab,
    setAdminActiveTab,
    announcements,
    addAnnouncement,
    agendas,
    addAgenda,
    reports,
    updateReportStatus,
    letterRequests,
    updateLetterStatus,
    umkmProducts,
    citizens,
    setViewingSuratDoc,
    simulateWaBroadcast,
    setIsWaLogModalOpen
  } = useApp();

  const [showAnnModal, setShowAnnModal] = useState(false);
  const [newAnn, setNewAnn] = useState({ title: '', category: 'Umum', content: '', target: 'Semua Warga' });

  const [showAgendaModal, setShowAgendaModal] = useState(false);
  const [newAge, setNewAge] = useState({ title: '', date: '', time: '', location: '', category: 'Musyawarah', description: '', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80' });

  const [selectedReportForAction, setSelectedReportForAction] = useState(null);
  const [adminResponseText, setAdminResponseText] = useState('');

  const pendingReportsCount = reports.filter(r => r.status === 'diajukan' || r.status === 'diproses').length;
  const pendingLettersCount = letterRequests.filter(l => l.status === 'perlu_review' || l.status === 'diajukan').length;

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    if (!newAnn.title || !newAnn.content) return;
    addAnnouncement(newAnn);
    setShowAnnModal(false);
    setNewAnn({ title: '', category: 'Umum', content: '', target: 'Semua Warga' });
  };

  const handleCreateAgenda = (e) => {
    e.preventDefault();
    if (!newAge.title || !newAge.date) return;
    addAgenda(newAge);
    setShowAgendaModal(false);
    setNewAge({ title: '', date: '', time: '', location: '', category: 'Musyawarah', description: '', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80' });
  };

  const handleUpdateReport = (status) => {
    if (!selectedReportForAction) return;
    updateReportStatus(selectedReportForAction.id, status, adminResponseText);
    setSelectedReportForAction(null);
    setAdminResponseText('');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* ADMIN HEADER BANNER */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-400/30 mb-2">
              <ShieldCheck className="w-4 h-4 text-indigo-300" />
              <span>Sistem Dasbor Pengurus RW 08</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              Pusat Kendali Operasional Komunitas
            </h1>
            <p className="text-xs sm:text-sm text-indigo-100 mt-1">
              Kelola pengumuman, agenda, moderasi laporan warga, review draf surat AI (Human-in-the-Loop), dan pemantauan notifikasi WhatsApp Fonnte.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWaLogModalOpen(true)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-white/20 backdrop-blur-md transition-all"
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Log Gateway WA</span>
            </button>
          </div>
        </div>

        {/* KPI Analytics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-indigo-200 font-semibold">Total Warga Terdaftar</span>
            <p className="text-2xl font-black text-white mt-1">{citizens.length * 80} Jiwa</p>
            <span className="text-[10px] text-emerald-300 font-bold">100% Terverifikasi</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-indigo-200 font-semibold">Laporan Perlu Tindakan</span>
            <p className="text-2xl font-black text-amber-300 mt-1">{pendingReportsCount} Kasus</p>
            <span className="text-[10px] text-amber-200 font-bold">{reports.length} Total Laporan</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-indigo-200 font-semibold">Draf Surat AI Perlu Review</span>
            <p className="text-2xl font-black text-indigo-200 mt-1">{pendingLettersCount} Berkas</p>
            <span className="text-[10px] text-indigo-200 font-bold">Human-in-the-Loop AI</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-indigo-200 font-semibold">UMKM Lokal Aktif</span>
            <p className="text-2xl font-black text-teal-200 mt-1">{umkmProducts.length} Usaha</p>
            <span className="text-[10px] text-teal-100 font-bold">Bebas Biaya Lisensi</span>
          </div>
        </div>
      </div>

      {/* ADMIN SUB-NAV TABS */}
      <div className="flex items-center gap-2 overflow-x-auto p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {[
          { id: 'overview', label: 'Ringkasan KPI', icon: BarChart3 },
          { id: 'announcements', label: 'Pengumuman & Agenda', icon: Megaphone },
          { id: 'reports', label: 'Laporan Warga', icon: AlertTriangle, badge: pendingReportsCount },
          { id: 'surat', label: 'Review Surat AI', icon: Bot, badge: pendingLettersCount },
          { id: 'umkm', label: 'Data Warga & UMKM', icon: Store }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = adminActiveTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setAdminActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge > 0 && (
                <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* OVERVIEW TAB */}
      {adminActiveTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-village rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Laporan Warga Terbaru Perlu Respon
            </h3>

            <div className="space-y-3">
              {reports.slice(0, 3).map((rep) => (
                <div key={rep.id} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">{rep.id}</span>
                    <span className="bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold px-2.5 py-0.5 rounded-full uppercase text-[10px]">
                      {rep.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{rep.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{rep.reporterName} ({rep.rtRw}) • {rep.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-village rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Draf Surat AI Menunggu Persetujuan
            </h3>

            <div className="space-y-3">
              {letterRequests.map((req) => (
                <div key={req.id} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-indigo-700 dark:text-indigo-400 font-bold">{req.id}</span>
                    <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 font-bold px-2.5 py-0.5 rounded-full uppercase text-[10px]">
                      {req.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{req.typeName}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Pemohon: {req.applicantName} ({req.rtRw})</p>
                  <button
                    onClick={() => setViewingSuratDoc(req)}
                    className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline font-bold flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> Pratinjau Dokumen AI
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ANNOUNCEMENTS & AGENDAS TAB */}
      {adminActiveTab === 'announcements' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Kelola Pengumuman & Agenda Komunitas
            </h3>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAnnModal(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" /> + Buat Pengumuman Baru
              </button>
              <button
                onClick={() => setShowAgendaModal(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" /> + Buat Agenda Baru
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-village rounded-3xl p-6 space-y-4">
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Pengumuman Aktif</h4>
              <div className="space-y-3">
                {announcements.map((ann) => (
                  <div key={ann.id} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-indigo-700 dark:text-indigo-400 font-bold">{ann.category}</span>
                      <span className="text-slate-500">{ann.date}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">{ann.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{ann.content}</p>
                    <button
                      onClick={() => simulateWaBroadcast(ann.title)}
                      className="text-xs text-emerald-700 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1 pt-1"
                    >
                      <Send className="w-3.5 h-3.5" /> Re-broadcast WhatsApp
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-village rounded-3xl p-6 space-y-4">
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Jadwal Agenda Kegiatan</h4>
              <div className="space-y-3">
                {agendas.map((age) => (
                  <div key={age.id} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-teal-700 dark:text-teal-400 font-bold">{age.category}</span>
                      <span className="text-slate-500 font-mono">{age.date} ({age.time})</span>
                    </div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">{age.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{age.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REPORTS MODERATION TAB */}
      {adminActiveTab === 'reports' && (
        <div className="card-village rounded-3xl p-6 space-y-6">
          <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Moderasi Pelaporan Kejadian Warga
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 font-bold uppercase border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">ID Laporan</th>
                  <th className="p-3">Pelapor</th>
                  <th className="p-3">Judul Laporan</th>
                  <th className="p-3">Kategori</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Aksi Admin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {reports.map((rep) => (
                  <tr key={rep.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{rep.id}</td>
                    <td className="p-3 font-medium">{rep.reporterName} ({rep.rtRw})</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{rep.title}</td>
                    <td className="p-3">{rep.category}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        rep.status === 'selesai'
                          ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400'
                          : 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300'
                      }`}>
                        {rep.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setSelectedReportForAction(rep)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1 rounded-lg"
                      >
                        Tindak Lanjuti
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* AI SURAT REVIEW TAB */}
      {adminActiveTab === 'surat' && (
        <div className="card-village rounded-3xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Human-in-the-Loop AI Surat Verification
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tinjau draf dokumen yang dibuat AI secara otomatis sebelum diterbitkan resmi ke warga.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {letterRequests.map((req) => (
              <div key={req.id} className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-400">{req.id}</span>
                    <span className="bg-indigo-100 dark:bg-indigo-950 border border-indigo-300 text-indigo-800 dark:text-indigo-300 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                      {req.typeName}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{req.applicantName}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Keperluan: {req.purpose}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setViewingSuratDoc(req)}
                    className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Lihat Draf Dokumen
                  </button>

                  {req.status !== 'disetujui' && (
                    <button
                      onClick={() => updateLetterStatus(req.id, 'disetujui', 'Disetujui oleh Pengurus RT/RW')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Setujui & Terbitkan
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DATA WARGA TAB */}
      {adminActiveTab === 'umkm' && (
        <div className="card-village rounded-3xl p-6 space-y-6">
          <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Direktori Data Warga RW 08
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 font-bold uppercase border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">ID Warga</th>
                  <th className="p-3">Nama Lengkap</th>
                  <th className="p-3">NIK</th>
                  <th className="p-3">RT/RW</th>
                  <th className="p-3">Peran / Status</th>
                  <th className="p-3">Status WhatsApp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {citizens.map((cit) => (
                  <tr key={cit.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3 font-mono font-bold text-slate-500">{cit.id}</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{cit.name}</td>
                    <td className="p-3 font-mono">{cit.nik}</td>
                    <td className="p-3">{cit.rtRw}</td>
                    <td className="p-3">
                      <span className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 px-2.5 py-0.5 rounded-full font-bold">
                        {cit.role}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                        {cit.waStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* REPORT ACTION MODAL */}
      {selectedReportForAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Tindak Lanjuti Laporan #{selectedReportForAction.id}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">{selectedReportForAction.title}</p>

            <textarea
              rows={3}
              value={adminResponseText}
              onChange={(e) => setAdminResponseText(e.target.value)}
              placeholder="Berikan tanggapan / instruksi untuk pelapor..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-900 dark:text-white"
            />

            <div className="flex justify-end gap-2 pt-3">
              <button
                onClick={() => setSelectedReportForAction(null)}
                className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-bold"
              >
                Batal
              </button>
              <button
                onClick={() => handleUpdateReport('diproses')}
                className="bg-amber-500 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold"
              >
                Tandai Diproses
              </button>
              <button
                onClick={() => handleUpdateReport('selesai')}
                className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold"
              >
                Tandai Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEW ANNOUNCEMENT MODAL */}
      {showAnnModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Buat Pengumuman Baru & Broadcast WA</h3>
            <form onSubmit={handleCreateAnnouncement} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Judul Pengumuman"
                value={newAnn.title}
                onChange={(e) => setNewAnn({ ...newAnn, title: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
              />
              <textarea
                required
                rows={4}
                placeholder="Isi Pengumuman..."
                value={newAnn.content}
                onChange={(e) => setNewAnn({ ...newAnn, content: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAnnModal(false)}
                  className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white font-bold px-5 py-2 rounded-xl"
                >
                  Publikasikan & Broadcast WA
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NEW AGENDA MODAL */}
      {showAgendaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Buat Agenda Kegiatan Baru</h3>
            <form onSubmit={handleCreateAgenda} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Judul Agenda"
                value={newAge.title}
                onChange={(e) => setNewAge({ ...newAge, title: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  required
                  value={newAge.date}
                  onChange={(e) => setNewAge({ ...newAge, date: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Waktu (e.g. 08:00 WIB)"
                  value={newAge.time}
                  onChange={(e) => setNewAge({ ...newAge, time: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Lokasi Kegiatan"
                value={newAge.location}
                onChange={(e) => setNewAge({ ...newAge, location: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
              />
              <textarea
                rows={3}
                placeholder="Deskripsi kegiatan..."
                value={newAge.description}
                onChange={(e) => setNewAge({ ...newAge, description: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAgendaModal(false)}
                  className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 text-white font-bold px-5 py-2 rounded-xl"
                >
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
