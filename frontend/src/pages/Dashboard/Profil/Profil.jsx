import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileForm from "../../../components/Modal/EditProfile/ModalEditProfile";

const Profil = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    no_telp: "",
    profile_image: "https://via.placeholder.com/150",
    role: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const response = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { name, email, no_telp, profile_image, role } = response.data;
        setUser({ name, email, no_telp, profile_image, role });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async (formData) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put("http://localhost:5000/api/user/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(formData);
      closeModal();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error loading profile data.</p>;
  // }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-4">
      <div className="mx-5 mt-5 mb-5 lg:mb-10">
        <h2 className="text-[#22B286] dark:text-white font-Roboto font-bold text-2xl lg:text-[40px] lg:mb-2 md:mb-2 mb-2">
          PROFIL
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white border-4 border-gray-100 dark:border-blue-950 dark:bg-gradient-to-bl from-gray-900 via-blue-950 to-gray-900 shadow-md rounded-lg w-80 lg:w-[80%] md:w-[80%] p-4 mx-4">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleEditProfile}
              className="flex items-center bg-[#20B486] dark:bg-white dark:text-black font-bold font-Roboto shadow-md text-white px-4 py-2 rounded-md hover:bg-[#18a374] transition duration-200"
            >
              Edit Profil
            </button>
            <ProfileForm
              isOpen={isModalOpen}
              closeModal={closeModal}
              initialData={user}
              onSave={handleSave}
            />
          </div>
          <div className="flex flex-col items-center mb-6">
            <img
              src={user.profile_image}
              alt="User Avatar"
              className="w-32 h-32 rounded-full mb-4 border-2 border-black dark:border-white"
            />
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2 font-Roboto text-black dark:text-white">
                {user.name}
              </h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                <tr className="w-full border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-Roboto">
                    Email
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-100">
                    {user.email || "Email tidak tersedia"}
                  </td>
                </tr>
                <tr className="w-full border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-Roboto">
                    Telepon
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-100">
                    {user.no_telp || "Nomor telepon tidak tersedia"}
                  </td>
                </tr>
                <tr className="w-full border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Role
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-100">
                    {user.role || "Role tidak tersedia"}
                  </td>
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
