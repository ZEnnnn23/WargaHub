import React from 'react';
import { useApp } from '../context/AppContext';
import SuratAiWizard from './SuratAiWizard';
import LaporWargaForm from './LaporWargaForm';
import PojokUmkm from './PojokUmkm';
import {
  Megaphone,
  Calendar,
  AlertTriangle,
  FileText,
  Store,
  Clock,
  CheckCircle2,
  Share2,
  Bot,
  MapPin
} from 'lucide-react';

const categoryImagesMap = {
  'Kesehatan': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  'Musyawarah': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  'Pemberdayaan': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  'Lingkungan': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
};

export default function PortalWarga() {
  const {
    wargaActiveTab,
    setWargaActiveTab,
    announcements,
    agendas,
    reports,
    letterRequests,
    communityInfo,
    setIsWaChatbotOpen
  } = useApp();

  return (
    <div className="space-y-8 pb-16">
      
      {/* HERO SECTION - Clean Emerald & Dark Teal Gradient */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#065f46] text-white p-6 sm:p-10 shadow-lg">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-white/30">
            <Bot className="w-4 h-4 text-emerald-200 animate-pulse" />
            <span>Layanan Komunitas Terpadu WhatsApp & AI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            Portal Digital Komunitas Warga{' '}
            <span className="text-emerald-200 font-black">
              RW 08 Sukamaju
            </span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-50 leading-relaxed font-medium">
            Platform terpadu desa & komplek perumahan. Permohonan surat pengantar RT/RW AI instant, lapor kejadian lingkungan real-time, jadwal agenda desa, dan Pojok UMKM lokal.
          </p>

          {/* Quick Action Pills */}
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setWargaActiveTab('surat')}
              className="flex items-center gap-2 bg-white text-[#064e3b] font-black text-xs px-5 py-3 rounded-2xl shadow-md hover:bg-emerald-50 transform hover:-translate-y-0.5 transition-all"
            >
              <FileText className="w-4 h-4 text-[#16a34a]" />
              <span>Ajukan Surat AI</span>
            </button>

            <button
              onClick={() => setWargaActiveTab('lapor')}
              className="flex items-center gap-2 bg-[#064e3b]/80 hover:bg-[#064e3b] text-white font-bold text-xs px-5 py-3 rounded-2xl border border-white/30 backdrop-blur-md transition-all"
            >
              <AlertTriangle className="w-4 h-4 text-amber-300" />
              <span>Lapor Kejadian</span>
            </button>

            <button
              onClick={() => setIsWaChatbotOpen(true)}
              className="flex items-center gap-2 bg-emerald-950/80 text-emerald-200 font-bold text-xs px-5 py-3 rounded-2xl border border-emerald-400/40 hover:bg-emerald-900 transition-all"
            >
              <Bot className="w-4 h-4 text-emerald-300" />
              <span>Tanya Chatbot WA</span>
            </button>
          </div>
        </div>

        {/* Quick Community Stats Counter Strip */}
        <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
            <span className="text-xs text-emerald-100 font-medium">Total Warga RW 08</span>
            <p className="text-2xl font-black text-white mt-0.5">{communityInfo.totalWarga} Jiwa</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
            <span className="text-xs text-emerald-100 font-medium">Permohonan Surat</span>
            <p className="text-2xl font-black text-white mt-0.5">{letterRequests.length} Berkas</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
            <span className="text-xs text-emerald-100 font-medium">Laporan Ditangani</span>
            <p className="text-2xl font-black text-white mt-0.5">{reports.length} Laporan</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
            <span className="text-xs text-emerald-100 font-medium">Respon WA AI</span>
            <p className="text-2xl font-black text-white mt-0.5">&lt; 1 Menit</p>
          </div>
        </div>
      </div>

      {/* PORTAL TAB NAVIGATION STRIP */}
      <div className="flex items-center gap-2 overflow-x-auto p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xs">
        {[
          { id: 'home', label: 'Info & Agenda Desa', icon: Megaphone },
          { id: 'surat', label: 'Ajukan Surat AI', icon: FileText, badge: 'AI Engine' },
          { id: 'lapor', label: 'Lapor Kejadian', icon: AlertTriangle },
          { id: 'umkm', label: 'Pojok UMKM', icon: Store },
          { id: 'status', label: 'Status Pengajuan', icon: Clock, count: letterRequests.length + reports.length }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = wargaActiveTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setWargaActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-extrabold text-xs transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#064e3b] text-white shadow-md'
                  : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="bg-emerald-100 dark:bg-emerald-950 text-[#064e3b] dark:text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-black border border-emerald-300 dark:border-emerald-800">
                  {tab.badge}
                </span>
              )}
              {tab.count !== undefined && (
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT AREAS */}

      {/* TAB 1: HOME (Pengumuman & Agenda Desa) */}
      {wargaActiveTab === 'home' && (
        <div className="space-y-10">

          {/* AGENDA KEGIATAN LINGKUNGAN DESA */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#16a34a] dark:text-emerald-400" />
                  Agenda Kegiatan Lingkungan Desa
                </h2>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">
                  Jadwal kegiatan gotong royong, posyandu, musyawarah, dan pemberdayaan warga.
                </p>
              </div>

              <span className="text-xs font-black bg-emerald-100 dark:bg-emerald-950 text-[#064e3b] dark:text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-800 hidden sm:inline-block">
                RW 08 Sukamaju
              </span>
            </div>

            {/* Grid Kartu Agenda Berfoto 16:9 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agendas.map((age, idx) => {
                const fallbackUrl = Object.values(categoryImagesMap)[idx % Object.values(categoryImagesMap).length];
                const agendaImgSrc = age.imageUrl || categoryImagesMap[age.category] || fallbackUrl;

                return (
                  <div
                    key={age.id}
                    className="card-village rounded-3xl overflow-hidden flex flex-col justify-between group shadow-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800"
                  >
                    <div>
                      {/* Village Photo Container (16:9 Aspect Ratio) */}
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                        <img
                          src={agendaImgSrc}
                          alt={age.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                        <span className="absolute top-3 left-3 bg-[#064e3b] text-white dark:bg-slate-900/90 dark:text-emerald-400 text-[11px] font-black px-3 py-1 rounded-xl shadow-xs border border-emerald-700 dark:border-slate-800">
                          {age.category}
                        </span>
                        <span className="absolute bottom-3 left-3 text-white text-xs font-mono font-black flex items-center gap-1 bg-slate-900/90 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" /> {age.date}
                        </span>
                      </div>

                      {/* Content Details with High Contrast text-slate-900 dark:text-white */}
                      <div className="p-5 space-y-2.5">
                        <h3 className="font-black text-slate-900 dark:text-white text-base leading-snug group-hover:text-[#16a34a] transition-colors">
                          {age.title}
                        </h3>
                        <p className="text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed line-clamp-2">
                          {age.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-3">
                      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs space-y-1.5 font-extrabold">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200">
                          <Clock className="w-4 h-4 text-[#16a34a] shrink-0" />
                          <span>{age.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200">
                          <MapPin className="w-4 h-4 text-[#16a34a] shrink-0" />
                          <span className="line-clamp-1">{age.location}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => alert(`RSVP Pengingat WA untuk "${age.title}" berhasil diaktifkan!`)}
                        className="w-full bg-[#064e3b] hover:bg-[#047857] text-white font-black text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                        <span>Ingatkan Saya via WA</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PENGUMUMAN RESMI KOMUNITAS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-[#16a34a] dark:text-emerald-400" />
                Pengumuman Resmi Pengurus RW 08
              </h2>
              <span className="text-xs text-slate-800 dark:text-slate-200 font-bold">Terhubung ke WhatsApp Broadcast</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="card-village rounded-3xl p-6 space-y-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#064e3b] dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                      {ann.category}
                    </span>
                    <span className="text-xs text-slate-800 dark:text-slate-200 font-extrabold">{ann.date} • {ann.author}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white">{ann.title}</h3>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed">{ann.content}</p>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-800 dark:text-slate-200">
                    <span className="flex items-center gap-1.5 text-[#064e3b] dark:text-emerald-400 font-black">
                      <CheckCircle2 className="w-3.5 h-3.5" /> WA Broadcast Terkirim
                    </span>
                    <button
                      onClick={() => alert(`Pengumuman "${ann.title}" dibagikan!`)}
                      className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg font-bold"
                    >
                      <Share2 className="w-3.5 h-3.5" /> Bagikan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: SURAT AI WIZARD */}
      {wargaActiveTab === 'surat' && <SuratAiWizard />}

      {/* TAB 3: LAPOR WARGA */}
      {wargaActiveTab === 'lapor' && <LaporWargaForm />}

      {/* TAB 4: POJOK UMKM */}
      {wargaActiveTab === 'umkm' && <PojokUmkm />}

      {/* TAB 5: STATUS TRACKING CENTER */}
      {wargaActiveTab === 'status' && (
        <div className="card-village rounded-3xl p-6 sm:p-8 space-y-6 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#16a34a] dark:text-emerald-400" />
              Pusat Pelacakan Status Pengajuan
            </h2>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">
              Pantau perjalanan permohonan surat administrasi dan status tindak lanjut laporan Anda secara real-time.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#16a34a] dark:text-emerald-400" />
              Permohonan Surat Administrasi ({letterRequests.length})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {letterRequests.map((req) => (
                <div key={req.id} className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-300 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#064e3b] dark:text-emerald-400">{req.id}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${
                      req.status === 'disetujui'
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-[#064e3b] dark:text-emerald-400 border border-emerald-300'
                        : 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300'
                    }`}>
                      {req.status === 'perlu_review' ? 'Review Admin' : req.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{req.typeName}</h4>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-bold">Pemohon: {req.applicantName} ({req.rtRw})</p>
                  <p className="text-xs text-slate-900 dark:text-slate-100 italic font-mono">Keperluan: "{req.purpose}"</p>

                  <div className="pt-2 border-t border-slate-300 dark:border-slate-800 text-[11px] text-slate-800 dark:text-slate-200 flex items-center justify-between font-bold">
                    <span>Dikirim: {req.submittedAt}</span>
                    <span className="text-[#064e3b] dark:text-emerald-400 font-extrabold">{req.channel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
