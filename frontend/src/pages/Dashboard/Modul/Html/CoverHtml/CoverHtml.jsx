import { MHtml } from '../../../../../assets/image/Modul/MHtml';
import { FaBook } from 'react-icons/fa';
import ButtonModul from '../../../../../components/button/Modul/ButtonModul';

export default function CoverHtml() {
    return (
        <>
                <div className="bg-white pt-2 lg:pt-20 pb-10 flex flex-col justify-center items-center">
                    <img src={MHtml} alt="HTML" className="h-32 mb-8 animate-pulse" />
                    <h1 className="text-4xl font-bold mb-4">Modul HTML</h1>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:mx-24">
                        <ButtonModul title="Sejarah dan Peran HTML" link="/dashboard/modul/html/1" icon={FaBook} />
                        <ButtonModul title="Teks dan Paragraf HTML" link="/dashboard/modul/html/2" icon={FaBook} />
                        <ButtonModul title="Daftar dan Tabel HTML" link="/dashboard/modul/html/3" icon={FaBook} />
                        <ButtonModul title="Gambar Tautan Multimedia" link="/dashboard/modul/html/4" icon={FaBook} />
                        <ButtonModul title="Formulir dan Input HTML" link="/dashboard/modul/html/5" icon={FaBook} />
                    </div>
                </div>
        </>
    );
}


