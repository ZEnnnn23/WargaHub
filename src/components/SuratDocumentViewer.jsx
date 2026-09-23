import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Printer, Download, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function SuratDocumentViewer() {
  const { viewingSuratDoc, setViewingSuratDoc } = useApp();

  if (!viewingSuratDoc) return null;

  const draft = viewingSuratDoc.aiDraftContent || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-3xl w-full space-y-6 shadow-2xl relative my-8">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 no-print">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Dokumen Resmi Disetujui
            </span>
            <span className="text-xs text-slate-400 font-mono">ID: {viewingSuratDoc.id}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
            >
              <Printer className="w-4 h-4" /> CETAK / PDF
            </button>
            <button
              onClick={() => setViewingSuratDoc(null)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Official Document Sheet */}
        <div className="bg-white p-8 sm:p-12 text-slate-900 font-sans shadow-xl rounded-xl border border-slate-300 space-y-6">
          
          {/* Header Kop Surat */}
          <div className="text-center border-b-2 border-slate-900 pb-4">
            <h3 className="font-extrabold text-xl text-slate-900 uppercase tracking-wide">
              Pemerintah Kota Depok — Kecamatan Cilodong
            </h3>
            <h4 className="font-bold text-base text-slate-800 uppercase">
              Rukun Warga 08 / Rukun Tetangga {viewingSuratDoc.rtRw || '02'} Kelurahan Sukamaju
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Alamat Balai Warga: Jl. Dahlia Raya No. 01 Sukamaju Depok Kode Pos 16415
            </p>
          </div>

          {/* Title */}
          <div className="text-center space-y-1">
            <h2 className="font-extrabold text-lg text-slate-900 underline uppercase tracking-wider">
              {viewingSuratDoc.typeName}
            </h2>
            <p className="text-xs font-mono text-slate-700">
              Nomor: {draft.nomorSurat || '470/082/RT.02-RW.08/IX/2026'}
            </p>
          </div>

          {/* Content */}
          <div className="text-xs sm:text-sm text-slate-900 space-y-3 leading-relaxed">
            <p>
              Yang bertanda tangan di bawah ini Pengurus RT {viewingSuratDoc.rtRw || '02'} / RW 08 Kelurahan Sukamaju, Kecamatan Cilodong, Kota Depok, menerangkan dengan sesungguhnya bahwa:
            </p>

            <div className="pl-6 space-y-1.5 font-mono text-xs text-slate-900">
              <div className="grid grid-cols-3">
                <span className="font-bold text-slate-700">Nama Lengkap</span>
                <span className="col-span-2">: {draft.nama || viewingSuratDoc.applicantName}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="font-bold text-slate-700">NIK</span>
                <span className="col-span-2">: {draft.nik || viewingSuratDoc.nik}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="font-bold text-slate-700">TTL</span>
                <span className="col-span-2">: {draft.tempatTanggalLahir || 'Depok, 14 April 1992'}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="font-bold text-slate-700">Pekerjaan</span>
                <span className="col-span-2">: {draft.pekerjaan || 'Wiraswasta'}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="font-bold text-slate-700">Alamat Domisili</span>
                <span className="col-span-2">: {draft.alamat || 'Jl. Kamboja No. 12 RT 02 RW 08'}</span>
              </div>
            </div>

            <p className="pt-2">
              Berdasarkan catatan kependudukan kami, nama tersebut di atas adalah warga yang berdomisili di lingkungan kami dan berkelakuan baik. Surat pengantar ini diberikan untuk keperluan:
            </p>

            <div className="p-3 bg-slate-100 rounded-lg font-semibold text-slate-900 border border-slate-300">
              "{draft.tujuan || viewingSuratDoc.purpose}"
            </div>

            <p>
              Demikian Surat Keterangan / Pengantar ini dibuat agar dapat dipergunakan sebagaimana mestinya.
            </p>
          </div>

          {/* Tanda Tangan */}
          <div className="pt-8 flex justify-between items-end text-xs text-slate-900">
            <div className="text-center space-y-1">
              <p className="font-bold text-slate-700">Mengetahui,</p>
              <p className="font-extrabold">Ketua RW 08 Sukamaju</p>
              <div className="w-24 h-14 border border-dashed border-slate-400 rounded-md my-2 flex items-center justify-center text-[10px] text-slate-500 font-mono">
                [ Ttd Ketua RW ]
              </div>
              <p className="font-bold underline">Bpk. H. Bambang Sudirman</p>
            </div>

            <div className="text-center space-y-1">
              <p>Depok, {draft.tanggalSurat || '23 September 2026'}</p>
              <p className="font-extrabold">Ketua RT {viewingSuratDoc.rtRw || '02'} / RW 08</p>
              <div className="w-28 h-14 border border-emerald-500 bg-emerald-50 rounded-md my-2 flex flex-col items-center justify-center text-[10px] text-emerald-700 font-bold shadow-inner">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-0.5" />
                <span>E-SIGN VERIFIED</span>
                <span className="text-[8px] font-mono">WARGAHUB-2026</span>
              </div>
              <p className="font-bold underline">Bpk. Hendra Wijaya</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
