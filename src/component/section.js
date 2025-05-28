import sma from '../style/sma.jpg'
import smp from '../style/smp.jpg'
import sd from '../style/sd.jpg'
import tk from '../style/tk.jpg'

const section = () => {
    return(
        <section>
            <div className="biodata head">
                <h3>BIODATA</h3>
                <ul>
                    <li> Nama Lengkap : Deco Akbar Prasteya</li>
                    <li>Tempat, Tanggal Lahir : Kota Madiun, 30 Desember 2006</li>
                    <li>Alamat : Patihan, Kota Madiun</li>
                    <li>Email : decoakbar30@gmail.com</li>
                </ul>
                <p>Bonjour! dalam bahasa French yang berarti Halo.<br></br>Perkanalkan nama saya Deco Prasetya bisa dipanggil Deco atau Dap. Saya lahir tanggal 30 Desember 2006 di Kota Madiun. Saya adalah anak pertama dari 2 bersaudara dari pasangan bernama Nur Buanawati dan Rony Prasteya.<br></br>Pendidikan merupakan suatu hal yang sangat penting buat saya. Ketika banyak teman saya yang memilih untuk langsung bekerja setelah kuliah, saya lebih memilih untuk melanjutkan pendidikan selama orang tua masih mampu untuk membiayai. Menurut sama menguasai suatu disiplin ilmu merupakan hal yang sangat ingin saya lakukan.</p>
            </div>
            <div className="pendidikan head">
                <h3>PENDIDIKAN</h3>
                <ul>
                    <li>2025 | SMA Negeri 1 Madiun</li>
                    <li>2022 | SMP Negeri 3 Madiun</li>
                    <li>2019 | SD Negeri patihan Madiun</li>
                    <li>2013 | TK PG Rejo Agung Baru Madiun</li>
                </ul>
                <p>Pendidikan merupakan hal yang sangat penting bagi saya. Lembaga pendidikan merupakan faktor yang sangat mempengaruhi kualitas pendidikan seseorang. Selama ini beruntungnnya saya dapat menempuh pendidikan di lembaga yang bisa dibilang punya kualitas di Kota Madiun.<br></br>
                Pendidikan terakhir saya yaitu sekolah menengah atas di SMAN 1 Madiun. Tujuan saya selanjutnya adalah melanjutkan pendidikan di Politeknik negeri di Kota Madiun. Dalam Politeknik Negeri madiun nanti saya akan mengambil jurursan Rekayasa Perangkat Lunak. Tujuan saya mengambil jurusan tersebut yaitu mematangkan skill saya dalam bidang software developer.</p>
            </div>
            <div className='cont-photo'>
                <div className='sma pic-school'>
                    <img src={sma}></img>
                    <small>Sekolah Menengah Atas</small>
                </div>
                <div className='smp pic-school'>
                    <img src={smp}></img>
                    <small>Sekolah Menengah Pertama</small>
                </div>
                <div className='sd pic-school'>
                    <img src={sd}></img>
                    <small>Sekolah Dasar</small>
                </div>
                <div className='tk pic-school'>
                    <img src={tk}></img>
                    <small>Taman Kanak-Kanak</small>
                </div>
            </div>
            <div className='pengalaman head'>
                <h3>PENGALAMAN</h3>
                <div className='peng-smp'>
                    <h4>Sekolah Menengah Pertama</h4>
                    <p>Pengalaman saya saat menempuh pendidikan sekolah menengah pertama mengikuti <b>Ekstrakulikuler Basket, </b><b>Belajar Ilustrasi</b> dan tergabung dalam <b>band Kelas</b>. 2 tahun saya mengikuti Ekstrakulikuler Basket namun sayangnya saat itu tahun tahun terjadinya wajah covid-19. Tidak ada perlombaan sama sekali pada tahun tahun tersebut. Namun, sekolah kami sering mengadakan sparing bahkan diluar kota sekalipun. sekolah digadang gadang menjadi sekolah terkuat di bidang basket di daerah Kota madiun pada tahun tersebut karena sering menjuarai sparing sparing tersebut.<br></br>Tepat di tahun ketiga saya, saya mulai belajar Ilustrasi karena minat saya terhadap dunia Animasi. Tujuan saya pada saat itu adalah menguasai semua bagian dalam pembuatan film animasi. saya telah menguasai banyak hal seperti Ilustrasi, keyframe animasi, music direct skala kecil. <br></br>berlanjut sampai saya memutuskan untuk belajar alat musik. saya memulai dengan belajar menguasai alat musik gitar. keinginan saya berjalan dengan mulus karena ada beberapa teman di lingkungan saya yang advance bermain alat musik. dalam acara akhir sekolah, saya join ke ke band kelas dan awal mula saya belajar alat musik lebih dalam. </p>
                </div>
                <div className='peng-sma'>
                    <h3>Sekolah Menengah Atas</h3>
                    <p>Jenjang SMA merupakan saat dimana saya menemukan tujuan saya. Demi melanjutkan dunia di bidang musik. saya memutuskan untuk ikut dalam sebuah band bentukan baru di Kota Madiun. dengan beranggotakan siswa dari berbagai SMA di Kota Madiun, band kami berhasil meraih juara di perlombaan local.<br></br>
                    Menjelang akhir sekolah, saya mulai mengganti tujuan saya kedepan yaitu keinginan menjadi software developer. dengan konsistensi yang saya miliki, saya akan berusaha menjadi software developer profesional.</p>
                </div>
            </div>
        </section>
    )
}

export default section