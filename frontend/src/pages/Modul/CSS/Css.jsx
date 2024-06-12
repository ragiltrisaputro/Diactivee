import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/footer/Footer';
import Loading from '../../../components/Loading/Loading';
import { FaBook } from 'react-icons/fa';
import ButtonModul from '../../../components/button/Modul/ButtonModul';
import Modal from '../../../components/Modal/Modal';
import { LogoCss } from '../../../assets/image/Modul/CSS/Css';

export default function Css() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/registrasi');
    };

    const handleButtonClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            setShowModal(true);
        }
    };

    return (
        <>
            <Header />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="bg-white pt-28 pb-10 min-h-screen flex flex-col justify-center items-center">
                        <img src={LogoCss} alt="HTML" className="h-36 mb-8 animate-pulse" />
                        <h1 className="text-4xl font-bold mb-4">Modul CSS</h1>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:mx-24">
                            <ButtonModul title="HTML Part 1" icon={FaBook} onClick={handleButtonClick} />
                            <ButtonModul title="HTML Part 2" icon={FaBook} onClick={handleButtonClick} />
                            <ButtonModul title="HTML Part 3" icon={FaBook} onClick={handleButtonClick} />
                            <ButtonModul title="HTML Part 4" icon={FaBook} onClick={handleButtonClick} />
                            <ButtonModul title="HTML Part 5" icon={FaBook} onClick={handleButtonClick} />
                            <ButtonModul title="HTML Part 6" icon={FaBook} onClick={handleButtonClick} />
                        </div>
                    </div>
                    <Footer />
                </>
            )}
            {showModal && (
                <Modal handleLogin={handleLogin} handleRegister={handleRegister} setShowModal={setShowModal} />
            )}
        </>
    );
}