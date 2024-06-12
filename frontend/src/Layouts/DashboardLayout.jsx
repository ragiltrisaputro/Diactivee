import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import Header from '../components/Dashboard/Header/Header';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col">
            <Header setSidebarOpen={setSidebarOpen} />
            <main className="mt-16 mb-5 ml-0 lg:ml-64 lg:mt-20">
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
