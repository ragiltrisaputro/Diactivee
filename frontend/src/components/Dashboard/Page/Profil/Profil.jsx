import React from 'react';

const ProfilePage = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
            <div className="flex flex-col items-center mb-6">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full mb-4"
                />
                <h1 className="text-3xl font-bold">Ragil Tri Saputro</h1>
                <p className="text-gray-600">Open to work</p>
                <p className="text-sm text-green-500">ROOKIE III</p>
                <p className="text-gray-600">Headline belum diisi</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-700 leading-loose">No description</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <p className="text-gray-700">No skill found.</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        Belajar Dasar HTML
                        <span className="block text-sm text-gray-500">Lulus pada 26 Oktober 2023</span>
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Occupations</h2>
                <p className="text-gray-700">No occupation found. Please add your occupations.</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <p className="text-gray-700">No project found. Please add your projects.</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Educations</h2>
                <p className="text-gray-700">No education found. Please add your educations.</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Biodata</h2>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Name:</strong> Ragil Tri Saputro</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Date of birth:</strong> 21 Juli 2002</p>
                    <p><strong>Phone:</strong> 089623491166</p>
                    <p><strong>Address:</strong> Srowot Kalibagor Banyumas Jawa Tengah</p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
                <ul className="space-y-2 text-gray-700">
                    <li><strong>LinkedIn:</strong> <a href="#" className="text-blue-500 hover:underline">linkedin.com/in/ragiltri</a></li>
                    <li><strong>GitHub:</strong> <a href="#" className="text-blue-500 hover:underline">github.com/ragiltri</a></li>
                    <li><strong>Twitter:</strong> <a href="#" className="text-blue-500 hover:underline">@ragiltri</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
