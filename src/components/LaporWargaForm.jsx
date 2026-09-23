import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  AlertTriangle,
  Send,
  User,
  Clock,
  Filter,
  MessageSquare
} from 'lucide-react';

export default function LaporWargaForm() {
  const { reports, addReport } = useApp();

  const [activeSubTab, setActiveSubTab] = useState('form');
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterPhone: '',
    rtRw: 'RT 02 / RW 08',
    title: '',
    category: 'Fasilitas Umum',
    description: '',
    location: '',
    photoUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&auto=format&fit=crop&q=80'
  });

  const [filterCategory, setFilterCategory] = useState('Semua');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.reporterName || !formData.title || !formData.description) {
      alert('Mohon isi Nama Pemohon, Judul Laporan, dan Deskripsi Kejadian.');
      return;
    }
    addReport(formData);
    setFormData({
      reporterName: '',
      reporterPhone: '',
      rtRw: 'RT 02 / RW 08',
      title: '',
      category: 'Fasilitas Umum',
      description: '',
      location: '',
      photoUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&auto=format&fit=crop&q=80'
    });
    setActiveSubTab('list');
  };

  const filteredReports = reports.filter((rep) =>
    filterCategory === 'Semua' ? true : rep.category === filterCategory
  );

  return (
    <div className="space-y-6">
      {/* Header & Sub-tab Switcher */}
      <div className="flex items-center justify-between border-b border-slate-300 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Lapor Warga Real-Time
          </h2>
          <p className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">
            Laporkan gangguan kebersihan, jalan rusak, lampu PJU mati, atau fasilitas umum untuk ditindaklanjuti pengurus.
          </p>
        </div>

        <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-300 dark:border-slate-800">
          <button
            onClick={() => setActiveSubTab('form')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'form'
                ? 'bg-[#064e3b] text-white shadow-md'
                : 'text-slate-800 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            + Buat Laporan
          </button>
          <button
            onClick={() => setActiveSubTab('list')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'list'
                ? 'bg-[#064e3b] text-white shadow-md'
                : 'text-slate-800 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Daftar Laporan ({reports.length})
          </button>
        </div>
      </div>

      {/* FORM TAB */}
      {activeSubTab === 'form' && (
        <form onSubmit={handleSubmit} className="card-village rounded-3xl p-6 sm:p-8 space-y-6 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Nama Pelapor <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="reporterName"
                value={formData.reporterName}
                onChange={handleInputChange}
                placeholder="Contoh: Pak Suparno"
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Nomor WhatsApp Aktif
              </label>
              <input
                type="text"
                name="reporterPhone"
                value={formData.reporterPhone}
                onChange={handleInputChange}
                placeholder="Contoh: 081288776655"
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Kategori Kejadian
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              >
                <option value="Fasilitas Umum">Fasilitas Umum (Lampu PJU, Jalan, Drainase)</option>
                <option value="Kebersihan">Kebersihan & Sampah</option>
                <option value="Keamanan">Keamanan & Ketertiban</option>
                <option value="Lingkungan">Lingkungan & Pohon</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Lokasi Spesifik Kejadian
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Contoh: Depan Masjid Al-Ikhlas RT 03"
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Judul Ringkas Laporan <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Contoh: Lampu Penerangan Jalan Utama Padam"
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Detail Kronologi Kejadian <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Jelaskan secara rinci kendala atau kondisi di lapangan agar pengurus dapat segera bertindak..."
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#064e3b] hover:bg-[#047857] text-white font-black px-8 py-3 rounded-xl shadow-md text-xs"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Laporan Sekarang</span>
            </button>
          </div>
        </form>
      )}

      {/* LIST TAB */}
      {activeSubTab === 'list' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['Semua', 'Fasilitas Umum', 'Kebersihan', 'Lingkungan', 'Keamanan'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  filterCategory === cat
                    ? 'bg-[#064e3b] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="card-village rounded-2xl p-5 space-y-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#064e3b] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                    {report.id}
                  </span>
                  <span
                    className={`text-xs font-black px-2.5 py-1 rounded-full uppercase ${
                      report.status === 'selesai'
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-[#064e3b] dark:text-emerald-400 border border-emerald-300'
                        : report.status === 'diproses'
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300'
                        : 'bg-blue-100 dark:bg-blue-500/20 text-blue-900 dark:text-blue-400 border border-blue-300'
                    }`}
                  >
                    {report.status}
                  </span>
                </div>

                <h4 className="font-black text-slate-900 dark:text-white text-base leading-snug">{report.title}</h4>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-bold line-clamp-2">{report.description}</p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-800 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 font-bold">
                  <span className="flex items-center gap-1 font-bold">
                    <User className="w-3.5 h-3.5 text-slate-500" /> {report.reporterName} ({report.rtRw})
                  </span>
                  <span className="flex items-center gap-1 font-mono font-bold">
                    <Clock className="w-3.5 h-3.5 text-slate-500" /> {report.dateSubmitted}
                  </span>
                </div>

                {report.adminResponse && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-1">
                    <span className="font-black text-[#064e3b] dark:text-emerald-400 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" /> Tanggapan Pengurus:
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 italic font-medium text-[11px]">{report.adminResponse}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
