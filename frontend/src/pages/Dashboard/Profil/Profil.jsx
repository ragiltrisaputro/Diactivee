import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const user = {
  nama : "Ragil Tri Saputro"

}


const Profil = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="mt-2 bg-white">
        <div className="mx-5 mt-5 mb-5 lg:mb-10">
            <h2 className="text-[#22B286] font-Roboto font-bold text-2xl lg:text-[40px] lg:mb-2 md:mb-2">PROFIL</h2>
        </div>

         <div className="flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg w-80 lg:w-[80%] md:w-[80%] p-4 mx-4">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleEditProfile}
            className="flex items-center bg-[#20B486] text-white px-4 py-2 rounded-md hover:bg-[#18a374] transition duration-200"
          >
            <FaUserEdit className="mr-2" />
            Edit Profil
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-32 h-32 rounded-full mb-4"
          />
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">{user.nama}</h3>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <tbody>
              <tr className="w-full border-t">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">user@example.com</td>
              </tr>
              <tr className="w-full border-t">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Telepon</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">+62 812 3456 7890</td>
              </tr>
              <tr className="w-full border-t">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alamat</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Jl. Contoh No. 123, Kota, Negara</td>
              </tr>
              <tr className="w-full border-t">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bio</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Ini adalah bio singkat tentang pengguna.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profil;
