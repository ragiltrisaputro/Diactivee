// // src/context/UserContext.jsx
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     id: "",
//     name: "",
//     username: "",
//     email: "",
//     no_telp: "",
//     profile_image: "https://via.placeholder.com/150",
//     role: "",
//     created_at: "",
//     updated_at: "",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("Token not found in localStorage");
//         }

//         const response = await axios.get(
//           "http://localhost:5000/api/user/profile",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setUser(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
