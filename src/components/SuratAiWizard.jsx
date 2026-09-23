import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Bot,
  UserCheck,
  Send
} from 'lucide-react';

export default function SuratAiWizard() {
  const { letterTypes, addLetterRequest } = useApp();

  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(letterTypes[0].id);
  const [formData, setFormData] = useState({
    applicantName: '',
    nik: '',
    waPhone: '',
    rtRw: '02/08',
    ttl: '',
    pekerjaan: '',
    alamat: '',
    purpose: ''
  });

  const selectedLetterObj = letterTypes.find((t) => t.id === selectedType) || letterTypes[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 2) {
      if (!formData.applicantName || !formData.waPhone || !formData.purpose) {
        alert('Mohon lengkapi Nama Lengkap, Nomor WhatsApp, dan Tujuan Pengajuan.');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    addLetterRequest({
      typeId: selectedType,
      ...formData
    });
    setStep(4);
  };

  const resetWizard = () => {
    setStep(1);
    setFormData({
      applicantName: '',
      nik: '',
      waPhone: '',
      rtRw: '02/08',
      ttl: '',
      pekerjaan: '',
      alamat: '',
      purpose: ''
    });
  };

  return (
    <div className="card-village rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-300 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-100 dark:bg-emerald-950 text-[#064e3b] dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
              <Bot className="w-3.5 h-3.5 text-[#16a34a] dark:text-emerald-400" /> Human-in-the-Loop AI Engine
            </span>
            <span className="text-slate-700 dark:text-slate-300 text-xs font-bold">Layanan Administrasi Digital</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Pengajuan Surat Administrasi RT/RW
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">
            Teknologi AI menyusun draf dokumen secara otomatis dalam kurun waktu &lt; 1 menit untuk ditinjau oleh pengurus.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-950 p-2 rounded-2xl border border-slate-300 dark:border-slate-800">
          {[1, 2, 3].map((st) => (
            <div
              key={st}
              className={`flex items-center justify-center w-9 h-9 rounded-xl font-bold text-xs transition-all ${
                step === st
                  ? 'bg-[#064e3b] text-white shadow-md'
                  : step > st
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-[#064e3b] dark:text-emerald-300 border border-emerald-300'
                  : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-800'
              }`}
            >
              {step > st ? <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> : st}
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: Pilih Jenis Surat */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#16a34a] dark:text-emerald-400" />
            Langkah 1: Pilih Jenis Surat yang Dibutuhkan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {letterTypes.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-[#16a34a] shadow-md ring-2 ring-[#16a34a]/30'
                      : 'bg-white dark:bg-slate-950/60 border-slate-300 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                      isSelected ? 'bg-[#064e3b] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                    }`}>
                      {type.code}
                    </span>
                    <span className="text-xs text-[#064e3b] dark:text-emerald-400 font-extrabold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {type.estimatedDays}
                    </span>
                  </div>

                  <h4 className="font-black text-slate-900 dark:text-white text-base mb-1.5">{type.name}</h4>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed mb-4">{type.description}</p>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[11px] font-black text-slate-800 dark:text-slate-300 mb-1">Persyaratan:</p>
                    <ul className="text-[11px] text-slate-800 dark:text-slate-200 space-y-1 font-bold">
                      {type.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] dark:text-emerald-400 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 bg-[#064e3b] hover:bg-[#047857] text-white font-black px-6 py-3 rounded-xl shadow-md transition-all text-xs"
            >
              <span>Lanjutkan ke Isi Data Pemohon</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Formulir Data Pemohon */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#16a34a] dark:text-emerald-400" />
              Langkah 2: Lengkapi Data Pemohon ({selectedLetterObj.name})
            </h3>
            <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-[#064e3b] dark:text-emerald-300 border border-emerald-300 px-3 py-1 rounded-full font-bold">
              {selectedLetterObj.code}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 dark:bg-slate-950/60 p-6 rounded-2xl border border-slate-300 dark:border-slate-800">
            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Nama Lengkap Sesuai KTP <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleInputChange}
                placeholder="Contoh: Ahmad Dahlan"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="waPhone"
                value={formData.waPhone}
                onChange={handleInputChange}
                placeholder="Contoh: 081299887766"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Nomor Induk Kependudukan (NIK 16 Digit)
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                placeholder="Contoh: 3276012304920005"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Asal RT / RW
              </label>
              <select
                name="rtRw"
                value={formData.rtRw}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              >
                <option value="01/08">RT 01 / RW 08</option>
                <option value="02/08">RT 02 / RW 08</option>
                <option value="03/08">RT 03 / RW 08</option>
                <option value="04/08">RT 04 / RW 08</option>
                <option value="05/08">RT 05 / RW 08</option>
                <option value="06/08">RT 06 / RW 08</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Tempat & Tanggal Lahir
              </label>
              <input
                type="text"
                name="ttl"
                value={formData.ttl}
                onChange={handleInputChange}
                placeholder="Contoh: Depok, 14 April 1992"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Pekerjaan / Status
              </label>
              <input
                type="text"
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                placeholder="Contoh: Wiraswasta / Karyawan"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Alamat Lengkap Domisili
              </label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                placeholder="Contoh: Jl. Kamboja No. 12 RT 02 RW 08 Kelurahan Sukamaju"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-2">
                Tujuan / Keperluan Pengajuan Surat <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="purpose"
                rows={3}
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Jelaskan secara singkat keperluan Anda (Contoh: Persyaratan pembuatan rekening bank usaha / Melamar pekerjaan BUMN / Beasiswa)"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 font-bold px-5 py-2.5 rounded-xl text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </button>
            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 bg-[#064e3b] hover:bg-[#047857] text-white font-black px-6 py-2.5 rounded-xl shadow-md text-xs"
            >
              <span>Preview Draf Surat AI</span>
              <Sparkles className="w-4 h-4 text-emerald-200" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Preview Draf AI */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#16a34a] dark:text-emerald-400" />
              Langkah 3: Pratinjau Draf Otomatis Hasil Pemrosesan AI
            </h3>
            <span className="text-xs bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 px-3 py-1 rounded-full font-bold">
              Menunggu Persetujuan Admin
            </span>
          </div>

          <div className="bg-slate-100 dark:bg-slate-950 p-4 sm:p-8 rounded-2xl border border-slate-300 dark:border-slate-800">
            <div className="bg-white p-6 sm:p-10 rounded-xl text-slate-900 border border-slate-300 shadow-md font-sans">
              
              <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
                <h4 className="font-extrabold text-lg sm:text-xl text-slate-900 uppercase">
                  Pemerintah Kota Depok — Kecamatan Cilodong
                </h4>
                <h5 className="font-bold text-base text-slate-800 uppercase">
                  Rukun Warga 08 / Rukun Tetangga {formData.rtRw || '02'} Kelurahan Sukamaju
                </h5>
                <p className="text-xs text-slate-600 mt-1">
                  Sekretariat: Jl. Dahlia Raya No. 01 Balai Warga RW 08 Sukamaju Depok
                </p>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-extrabold text-base uppercase text-slate-900 underline">
                  {selectedLetterObj.name}
                </h3>
                <p className="text-xs font-mono text-slate-600 mt-0.5">
                  Nomor: 470 / {Math.floor(100 + Math.random() * 800)} / RT.{formData.rtRw || '02'}-RW.08 / IX / 2026
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-800 space-y-3 leading-relaxed">
                <p>
                  Yang bertanda tangan di bawah ini Pengurus RT {formData.rtRw || '02'} / RW 08 Kelurahan Sukamaju, Kecamatan Cilodong, Kota Depok, menerangkan bahwa:
                </p>

                <div className="pl-4 space-y-1.5 font-mono text-xs text-slate-900">
                  <div className="grid grid-cols-3">
                    <span className="font-bold text-slate-700">Nama Lengkap</span>
                    <span className="col-span-2">: {formData.applicantName || 'Ahmad Dahlan'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-bold text-slate-700">NIK</span>
                    <span className="col-span-2">: {formData.nik || '3276012304920005'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-bold text-slate-700">TTL</span>
                    <span className="col-span-2">: {formData.ttl || 'Depok, 14 April 1992'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-bold text-slate-700">Pekerjaan</span>
                    <span className="col-span-2">: {formData.pekerjaan || 'Wiraswasta / Warga'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-bold text-slate-700">Alamat</span>
                    <span className="col-span-2">: {formData.alamat || 'Jl. Kamboja No. 12 RT 02 RW 08'}</span>
                  </div>
                </div>

                <p className="pt-2">
                  Adalah benar warga yang bertempat tinggal di lingkungan kami. Surat pengantar ini diberikan untuk keperluan:
                </p>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900 font-semibold italic text-xs">
                  "{formData.purpose || 'Persyaratan pembuatan administrasi perbankan'}"
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex justify-between items-end text-xs text-slate-800">
                <div className="text-center">
                  <p className="font-semibold text-slate-600">Draf Otomatis Oleh:</p>
                  <div className="my-2 inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-mono">
                    <Sparkles className="w-3 h-3 text-[#16a34a]" /> WargaHub AI Engine
                  </div>
                </div>

                <div className="text-center">
                  <p>Depok, 23 September 2026</p>
                  <p className="font-bold text-slate-900 mt-1">Ketua RT {formData.rtRw || '02'} / RW 08</p>
                  <div className="w-24 h-10 my-1 border border-dashed border-emerald-400 rounded flex items-center justify-center text-[10px] text-emerald-700 font-bold bg-emerald-50 mx-auto">
                    [ E-Signature ]
                  </div>
                  <p className="font-bold underline text-slate-900">Bpk. H. Bambang Sudirman</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 font-bold px-5 py-2.5 rounded-xl text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ubah Data</span>
            </button>
            <button
              onClick={handleSubmitRequest}
              className="flex items-center gap-2 bg-[#064e3b] hover:bg-[#047857] text-white font-black px-8 py-3 rounded-xl shadow-lg text-xs"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Permohonan ke Pengurus</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Success Screen */}
      {step === 4 && (
        <div className="text-center py-10 space-y-5 max-w-lg mx-auto">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Permohonan Berhasil Dikirim!</h3>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-2">
              Draf dokumen AI telah diteruskan ke dasbor Pengurus RT/RW untuk verifikasi akhir.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={resetWizard}
              className="bg-[#064e3b] hover:bg-[#047857] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-all shadow-md"
            >
              Buat Permohonan Lain
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
