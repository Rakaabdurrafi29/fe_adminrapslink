import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <section className="text-center mb-12">
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-6 overflow-hidden">
          <img
            src="blue-logo.png"
            alt="Homepage Logo"
            className="object-cover w-50 h-50"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Selamat Datang!
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Temukan lebih banyak tentang saya dan social media saya.
        </p>

        {/* Tombol Call to Action yang Lebih Menarik */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/social"
            className="
              px-8 py-4          /* Padding lebih besar */
              bg-gradient-to-r from-purple-600 to-indigo-600 /* Gradien warna */
              text-white         /* Teks putih */
              font-extrabold     /* Font sangat tebal */
              text-lg            /* Ukuran teks lebih besar */
              rounded-full       /* Bentuk pil (sangat bulat) */
              shadow-lg          /* Bayangan besar */
              transform          /* Aktifkan transisi transform */
              hover:scale-105    /* Sedikit membesar saat di-hover */
              hover:shadow-xl    /* Bayangan lebih besar saat di-hover */
              hover:from-purple-700 hover:to-indigo-700 /* Warna gradien lebih gelap saat di-hover */
              transition-all duration-300 ease-in-out /* Transisi halus untuk semua properti */
              focus:outline-none focus:ring-4 focus:ring-purple-300 /* Efek fokus */
            "
          >
            Lihat Profil Saya
          </Link>
        </div>
      </section>

      {/* Bagian Informasi Tambahan (Opsional) */}
      <section className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tentang Kami
        </h2>
        <p className="text-gray-700 leading-relaxed">
        Memberikan gambaran cepat tentang keberadaan online saya dan mengarahkan pengunjung ke halaman profil atau informasi penting lainnya.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Rakha Abdurrafi. Semua Hak Cipta Dilindungi.
      </footer>
    </div>
  );
}