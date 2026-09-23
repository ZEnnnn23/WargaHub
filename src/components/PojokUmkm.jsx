import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Store,
  Phone,
  Star,
  Search,
  PlusCircle,
  CheckCircle2,
  Tag,
  X,
  ExternalLink
} from 'lucide-react';

export default function PojokUmkm() {
  const { umkmProducts, addUmkmProduct } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    storeName: '',
    ownerName: '',
    category: 'Kuliner & Makanan',
    phone: '',
    rtRw: 'RT 02 / RW 08',
    productName: '',
    price: '',
    unit: 'Per Porsi',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80'
  });

  const categories = ['Semua', 'Kuliner & Makanan', 'Jasa & Perbaikan', 'Kesehatan & Herbal', 'Pakaian & Tekstil'];

  const filteredProducts = umkmProducts.filter((p) => {
    const matchCat = selectedCategory === 'Semua' || p.category === selectedCategory;
    const matchSearch =
      p.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerForm.storeName || !registerForm.productName || !registerForm.phone) {
      alert('Mohon lengkapi Nama Usaha, Nama Produk, dan Nomor WhatsApp.');
      return;
    }
    let cleanPhone = registerForm.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '62' + cleanPhone.substring(1);
    }

    addUmkmProduct({
      ...registerForm,
      price: Number(registerForm.price) || 15000,
      phone: cleanPhone
    });

    setIsRegisterModalOpen(false);
    setRegisterForm({
      storeName: '',
      ownerName: '',
      category: 'Kuliner & Makanan',
      phone: '',
      rtRw: 'RT 02 / RW 08',
      productName: '',
      price: '',
      unit: 'Per Porsi',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header & Registration CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 text-xs font-bold px-3 py-0.5 rounded-full border border-amber-300">
              Pemberdayaan Ekonomi Lokal
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Store className="w-7 h-7 text-amber-500" />
            Pojok UMKM Komunitas Warga
          </h2>
          <p className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">
            Etalase produk & jasa lokal karya warga tetangga. Transaksi langsung via WhatsApp tanpa komisi platform.
          </p>
        </div>

        <button
          onClick={() => setIsRegisterModalOpen(true)}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-3 rounded-2xl shadow-md transform hover:-translate-y-0.5 transition-all text-xs"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Daftarkan Usaha UMKM Anda</span>
        </button>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Cari produk atau nama usaha..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white font-bold placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="card-village rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800"
          >
            <div>
              {/* Product Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-200 dark:bg-slate-950">
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 bg-[#064e3b] text-white dark:bg-slate-900/90 dark:text-amber-400 text-[10px] font-black px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-1">
                  <Tag className="w-3 h-3 text-amber-400" /> {product.category}
                </span>
                {product.isVerified && (
                  <span className="absolute top-3 right-3 bg-[#064e3b] text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3" /> Terverifikasi
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-800 dark:text-slate-300 font-bold">
                  <span>{product.storeName}</span>
                  <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-extrabold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {product.rating} ({product.reviewsCount})
                  </span>
                </div>

                <h3 className="font-black text-slate-900 dark:text-white text-sm line-clamp-1 group-hover:text-[#16a34a] transition-colors">
                  {product.productName}
                </h3>

                <p className="text-xs text-slate-800 dark:text-slate-200 font-bold line-clamp-2">{product.description}</p>
              </div>
            </div>

            {/* Price & Action Button */}
            <div className="p-4 pt-0 space-y-3">
              <div className="flex items-baseline justify-between border-t border-slate-200 dark:border-slate-800/80 pt-3">
                <span className="text-[10px] text-slate-700 dark:text-slate-300 font-bold">Harga:</span>
                <div className="text-right">
                  <span className="text-base font-black text-[#064e3b] dark:text-emerald-400">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] text-slate-800 dark:text-slate-300 font-bold"> / {product.unit}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${product.phone}?text=Halo%20${encodeURIComponent(product.ownerName)},%20saya%20warga%20RW%2008%20tertarik%20dengan%20produk%20${encodeURIComponent(product.productName)}%20di%20Pojok%20UMKM%20WargaHub.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-[#047857] text-white font-black text-xs py-2.5 rounded-xl shadow-md transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Beli via WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-emerald-200" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-6 shadow-2xl relative my-8 text-slate-900 dark:text-white">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-500" />
                Pendaftaran Usaha Pojok UMKM
              </h3>
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Nama Usaha / Toko <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={registerForm.storeName}
                    onChange={(e) => setRegisterForm({ ...registerForm, storeName: e.target.value })}
                    placeholder="Contoh: Dapur Bu Ani"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Nama Pemilik Usaha
                  </label>
                  <input
                    type="text"
                    value={registerForm.ownerName}
                    onChange={(e) => setRegisterForm({ ...registerForm, ownerName: e.target.value })}
                    placeholder="Contoh: Bu Sri Mulyani"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Nomor WhatsApp Jualan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={registerForm.phone}
                    onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                    placeholder="Contoh: 081299881122"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Kategori Usaha
                  </label>
                  <select
                    value={registerForm.category}
                    onChange={(e) => setRegisterForm({ ...registerForm, category: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  >
                    <option value="Kuliner & Makanan">Kuliner & Makanan</option>
                    <option value="Jasa & Perbaikan">Jasa & Perbaikan</option>
                    <option value="Kesehatan & Herbal">Kesehatan & Herbal</option>
                    <option value="Pakaian & Tekstil">Pakaian & Tekstil</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Nama Produk / Jasa Utama <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={registerForm.productName}
                    onChange={(e) => setRegisterForm({ ...registerForm, productName: e.target.value })}
                    placeholder="Contoh: Keripik Tempe Mendoan Renyah 250g"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Harga (Rp)
                  </label>
                  <input
                    type="number"
                    value={registerForm.price}
                    onChange={(e) => setRegisterForm({ ...registerForm, price: e.target.value })}
                    placeholder="18000"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 dark:text-slate-200 mb-1">
                    Satuan Harga
                  </label>
                  <input
                    type="text"
                    value={registerForm.unit}
                    onChange={(e) => setRegisterForm({ ...registerForm, unit: e.target.value })}
                    placeholder="Pouch / Per Unit / Per Porsi"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsRegisterModalOpen(false)}
                  className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-xl text-xs font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-2 rounded-xl text-xs font-black shadow-md"
                >
                  Simpan & Tayangkan UMKM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
