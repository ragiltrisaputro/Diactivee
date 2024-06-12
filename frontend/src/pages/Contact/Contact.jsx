import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Leaflet marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function ContactUs() {
  return (
    <>
      <Header className="z-50" />
      <div className="pt-28 pb-20 bg-[#F0FAF7] dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-4xl font-Roboto font-extrabold text-center text-[#20B486] mb-12">Kontak Kami</h1>
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="bg-white dark:bg-gradient-to-bl from-gray-800 via-blue-900  dark:border-2 dark:border-blue-800 to-gray-800 p-8 shadow-xl rounded-xl mb-8 transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-Roboto font-semibold mb-6 text-[#20B486] dark:text-white">Tinggalkan Pesan</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-200 font-Roboto leading-relaxed">jangan ragu untuk menghubungi kami dengan mengisi formulir di bawah ini</p>
                <form>
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-white font-Roboto text-sm font-medium mb-2" htmlFor="name">
                      Nama
                    </label>
                    <input
                      className="font-Roboto shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Nama"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block font-Roboto text-gray-700 dark:text-white text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shadow font-Roboto appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block font-Roboto text-gray-700 dark:text-white text-sm font-medium mb-2" htmlFor="message">
                      Pesan
                    </label>
                    <textarea
                      className="shadow font-Roboto appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows="4"
                      placeholder="Tinggalkan Pesan"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#20B486] font-Roboto hover:bg-green-700 dark:bg-white dark:text-black text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                      type="button"
                    >
                      Kirim
                    </button>
                  </div>
                </form>
              </div>
              <div className="bg-white dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 dark:border-2 dark:border-blue-800 p-8 shadow-xl rounded-xl transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-Roboto font-semibold mb-6 text-[#20B486] dark:text-white">Kontak Informasi</h2>
                <div className="flex font-Roboto items-center mb-4 text-gray-700 dark:text-white">
                  <FaMapMarkerAlt className="text-[#20B486] mr-3" />
                  <span>Jl. Kasihan, Bantul, Yogyakarta</span>
                </div>
                <div className="flex font-Roboto items-center mb-4 text-gray-700 dark:text-white">
                  <FaPhoneAlt className="text-[#20B486] mr-3" />
                  <span>+62 123 456 789</span>
                </div>
                <div className="flex font-Roboto items-center mb-4 text-gray-700 dark:text-white">
                  <FaEnvelope className="text-[#20B486] mr-3" />
                  <span>contact@diactivee.com</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 dark:border-2 dark:border-blue-800 p-8 shadow-xl rounded-xl mb-8 relative z-40 transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-Roboto font-semibold mb-6 text-[#20B486] dark:text-white">Lokasi Kami</h2>
                <MapContainer center={[-7.837622, 110.343230]} zoom={13} className="h-96 rounded-lg shadow-md relative z-30">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, including contributors from Indonesia'
                  />
                  <Marker position={[-7.837622, 110.343230]}>
                    <Popup>
                      Our Office Location in Kasihan, Bantul, Yogyakarta.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

