// library Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// img sekolah
import sma from '../assets/imgSekolah/sma.jpg'
import smp from '../assets/imgSekolah/smp.jpg'
import sd from '../assets/imgSekolah/sd.jpg'
import tk from '../assets/imgSekolah/tk.jpg'

// experience smp
import porkot2020 from '../assets/imgExperienceSmp/porkot2020.jpg'
import sparingSmp14 from '../assets/imgExperienceSmp/sparingSmp14.jpg'
import sparingSmpBabatan from '../assets/imgExperienceSmp/sparingSmpBabatan.jpg'
import animasi from '../assets/imgExperienceSmp/animasi.jpg'
import bandkelas from '../assets/imgExperienceSmp/bandKelas.jpg'
import berlatihBand from '../assets/imgExperienceSmp/berlatihBand.jpg'

// experience sma
import acaraGereja from '../assets/imgExperienceSma/acaraGereja.jpg'
import concertLesBand from '../assets/imgExperienceSma/concertLesband.jpg'
import diesNatalisPsiWima from '../assets/imgExperienceSma/diesNatalisPsiWima.jpg'
import eventLesarten from '../assets/imgExperienceSma/eventLesArten.jpg'
import eventLesLawu from '../assets/imgExperienceSma/eventLesLawu.jpg'
import eventLeswrg from '../assets/imgExperienceSma/eventLesWrg.jpg'
import fesAkustik from '../assets/imgExperienceSma/fesAkustik.jpg'
import festivalCaruban from '../assets/imgExperienceSma/festivalCaruban.jpg'
import fesWnp from '../assets/imgExperienceSma/fesWnp.jpg'
import hariMusik from '../assets/imgExperienceSma/hariMusik.jpg'
import hutSma4 from '../assets/imgExperienceSma/hutSma4.jpg'
import hutSma6 from '../assets/imgExperienceSma/hutSma6.jpg'
import hutSmp14 from '../assets/imgExperienceSma/hutSmp14.jpg'
import kegiatanEkskulArt from '../assets/imgExperienceSma/kegiatanEkskulArt.jpg'
import koserReligi from '../assets/imgExperienceSma/konserReligi.jpg'
import smp11 from '../assets/imgExperienceSma/smp11.jpg'
import tourBasketSekolah from '../assets/imgExperienceSma/tourBasketSekolah.jpg'

const section = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    return (
        <section>
            <div className="biodata head">
                <h3>BIODATA</h3>
                <ul>
                    <li> Nama Lengkap : Deco Akbar Prasteya</li>
                    <li>Tempat, Tanggal Lahir : Kota Madiun, 30 Desember 2006</li>
                    <li>Alamat : Patihan, Kota Madiun</li>
                    <li>Email : decoakbar30@gmail.com</li>
                </ul>
                <p>Bonjour! dalam bahasa French yang berarti Halo.<br></br>Perkenalkan nama saya Deco Prasetya bisa dipanggil Deco atau Dap. Saya lahir tanggal 30 Desember 2006 di Kota Madiun. Saya adalah anak pertama dari 2 bersaudara dari pasangan bernama Nur Buanawati dan Rony Prasetya.<br></br>Pendidikan merupakan suatu hal yang sangat penting buat saya. Ketika banyak teman saya yang memilih untuk langsung bekerja setelah kuliah, saya lebih memilih untuk melanjutkan pendidikan selama orang tua masih mampu untuk membiayai. Menurut sama menguasai suatu disiplin ilmu merupakan hal yang sangat ingin saya lakukan.</p>
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
            <div className='cont-school'>
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
                    <p>Pengalaman saya saat menempuh pendidikan sekolah menengah pertama mengikuti <em>Ekstrakulikuler Basket, </em><em>Belajar Ilustrasi</em> dan tergabung dalam <em>band Kelas</em>. 2 tahun saya mengikuti Ekstrakulikuler Basket. namun sayangnya saat itu tahun tahun terjadinya wajah covid-19. Tidak ada perlombaan sama sekali pada tahun tahun tersebut. Namun, sekolah kami sering mengadakan sparing bahkan diluar kota sekalipun. Dimasa kepemimpinan saya sebagai ketua Ekstrakulikuler, sekolah digadang gadang menjadi sekolah terkuat di bidang basket di daerah Kota madiun pada tahun tersebut karena sering menjuarai sparing sparing tersebut.<br></br>Tepat di tahun ketiga saya, saya mulai belajar Ilustrasi karena minat saya terhadap dunia Animasi. Tujuan saya pada saat itu adalah menguasai semua bagian dalam pembuatan film animasi. saya telah menguasai banyak hal seperti Ilustrasi, keyframe animasi, music direct skala kecil. <br></br>berlanjut sampai saya memutuskan untuk belajar alat musik. saya memulai dengan belajar menguasai alat musik gitar. keinginan saya berjalan dengan mulus karena ada beberapa teman di lingkungan saya yang advance bermain alat musik. dalam acara akhir sekolah, saya join ke ke band kelas dan awal mula saya belajar alat musik lebih dalam. </p>

                    <div className='cont-experience-map smp'>
                        <Slider {...settings}>
                            {exArraySmp.map((a) => (
                                <div className='card-experience'>
                                    <div className='img-cont'>
                                        <img src={a.img} />
                                    </div>

                                    <div className="text-cont">
                                        <text>
                                            {a.ket}
                                        </text>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
                <div className='peng-sma'>
                    <h4>Sekolah Menengah Atas</h4>
                    <p>Jenjang SMA merupakan saat dimana saya menemukan tujuan saya. Demi melanjutkan dunia di bidang musik. saya memutuskan untuk <em>ikut dalam sebuah band bentukan baru di Kota Madiun</em>. dengan beranggotakan siswa dari berbagai SMA di Kota Madiun, band kami berhasil meraih juara di perlombaan local.<br></br>
                        Saya tidak jarang ditunjuk oleh sekolah sebagai pewakilan lomba akademis. Saya <em>2 kali ditujuk sebagai perwakilan KSN (Kompetisi Sains Nasional)</em> tingkat kota dalam mata pelajaran Informatika. selain dari perwakilan, sekolah juga menunjuk saya dalam <em></em>lomba cerdas cermat dengan tema anti korupsi yang diadakan oleh KPK.<br></br>
                        Relasi menurut saya salah satu hal penting untuk membuka banyak  peluang di masa depan. pada tahun pertama sekolah, saya meutuskan untuk <em>ikut serta dalam organisasi MPK (Majelis Permusyawaratan Kelas)</em>. Di tahun ke 2 saya langsung <em>diangkat sebagai ketua bidang 9</em> tentang teknologi, inovasi, dan kreatifitas digital.<br></br>
                        Salah satu ekstrakulikuler yang saya ikuti dimasa SMA yaitu <em>ekstrakulikuler "BCORE"</em>. Ekstrakulikuler tersebut merupakan ekstrakulikuler Favorit yang ada di SMA. Ekstrakulikuler bidang teknologi yang berfokus pada fotografi, videografi dan desaiin grafis. karena hal tersebut saya dipercaya oleh lembaga sebagai ketua bidang 9 di MPK.<br></br>
                        Menjelang akhir sekolah, saya mulai mengganti tujuan saya kedepan yaitu <em>keinginan menjadi software developer</em>. dengan konsistensi yang saya miliki, saya akan berusaha menjadi software developer profesional.</p>

                    <div className='cont-experience-map sma'>
                        <Slider {...settings}>
                            {exArraySma.map((a) => (
                                <div className='card-experience'>
                                    <div className='img-cont'>
                                        <img src={a.img} />
                                    </div>

                                    <div className="text-cont">
                                        <text>
                                            {a.ket}
                                        </text>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="motivasi head">
                <h4>MOTIVASI</h4>
                <p>
                    Dunia *software development* bagi saya adalah petualangan tanpa akhir di mana setiap tantangan menjadi kesempatan untuk tumbuh. Saya terinspirasi oleh kekuatan kode yang bisa mengubah ide-ide abstrak menjadi solusi nyata, memudahkan kehidupan, dan bahkan menggerakkan inovasi global. Passion saya dalam pemrograman tidak hanya tentang menguasai bahasa atau teknologi tertentu, melainkan tentang bagaimana saya bisa menggunakan keterampilan ini untuk menciptakan dampak positif—baik bagi diri sendiri, orang lain, maupun masyarakat luas.<br></br>
                    Saya percaya bahwa konsistensi dan rasa ingin tahu adalah kunci kesuksesan di bidang ini. Meski jalan yang saya tempuh tidak selalu mulus, setiap *bug* yang berhasil diselesaikan dan setiap proyek yang berhasil dikerjakan semakin menguatkan tekad saya untuk terus belajar. Mimpi besar saya adalah menjadi seorang *developer* yang tidak hanya ahli secara teknis, tetapi juga mampu berkolaborasi, berbagi pengetahuan, dan berkontribusi pada ekosistem teknologi yang inklusif. Dengan semangat pantang menyerah, saya siap menghadapi setiap langkah dalam perjalanan ini, karena bagi saya, *coding* bukan sekadar keterampilan—melainkan alat untuk mewujudkan perubahan. 💻✨<br></br>
                    (Perubahan hanya pada kata ganti, struktur dan makna tetap sama. Lebih formal namun tetap personal.)</p>
            </div>
        </section>
    )
}



const exArraySmp = [
    {
        img: porkot2020,
        ket: 'Mengikuti perlobaan kota (PORKOT) pada tahun 2020, merupakan pertandingan basket pertama yang saya ikuti',
    },
    {
        img: sparingSmp14,
        ket: 'Kegiatan sparing dengan SPMN 14, sparing untuk menambah relasi dan persaingan antar sekolah',
    },
    {
        img: sparingSmpBabatan,
        ket: 'dokumentasi tim saat menuju SMP Babatan untuk melakukan sparing',
    },
    {
        img: animasi,
        ket: 'Dalam rangka HUT SMPN 3, saya membuat animasi singkat dalam rangka menyambut HUT tersebut',
    },
    {
        img: bandkelas,
        ket: 'Perform di acara perpisahan kelas dengan band kelas (awal mula saya terjun serius di dunia musik terutama band)',
    },
    {
        img: berlatihBand,
        ket: 'bersama personil lain dalam band kelas untuk memulai latian',
    },
]

const exArraySma = [
    {
        img: acaraGereja,
        ket: 'band kami Mengisi acara pemerintah kota dalam kreatifitas anak muda berlokasi di salah satu gereja di Kota Madiun'
    },
    {
        img: concertLesBand,
        ket: 'Tempat les musik yang menaungi band kami mengadakan concert berlokasi di SCM Mall Madiun'
    },
    {
        img: diesNatalisPsiWima,
        ket: 'band kami mengisi acara dalam Dies Natalis prodi Psikologi di Widya Mandala Madiun'
    },
    {
        img: eventLesarten,
        ket: 'Tempat les musik yang menaungi band kami mengadakan event live musik di salah satu cafe di Kota Madiun'
    },
    {
        img: eventLesLawu,
        ket: 'Tempat les musik yang menaungi band kami mengadakan event perform bagi murid muridnya termasuk band kami yang berlokasi di Plaza Lawu Madiun'
    },
    {
        img: eventLeswrg,
        ket: 'Tempat les musik yang menaungi band kami mengadakan event perform bagi murid muridnya termasuk band kami yang berlokasi di suatu tempat makan di Kota Madiun'
    },
    {
        img: fesAkustik,
        ket: 'mengikuti perlombaan Akustik di Kota Madiun dan berhasil meraih juara 3'
    },
    {
        img: festivalCaruban,
        ket: 'mengikuti festival musik di Kota Caruban'
    },
    {
        img: fesWnp,
        ket: 'Ikut dalam perlombaan band yang diadakan oleh suatu cafe di Kota Madiun dan berhasil memenangkan juara 2'
    },
    {
        img: hariMusik,
        ket: 'band kami diundang untuk perform band dalam acara hari musik yang diadakan oleh pemerintah'
    },
    {
        img: hutSma4,
        ket: 'sebuah kesempatan yang berharga bisa perform band mengisi cara dalam acara dalam rangkaian HUT SMA 4 Madiun'
    },
    {
        img: hutSma6,
        ket: 'Mendapatkan tawaran perform band untuk mengisi acara dalam rangkaian HUT SMA 6 Madiun'
    },
    {
        img: hutSmp14,
        ket: 'Kali ini mendapatkan tawaran perform band dalam acara perpisahan SMP 14 Kota Madiun'
    },
    {
        img: kegiatanEkskulArt,
        ket: 'Ekstra yang saya ikuti berhubungan dengan seni rupa melakukan kegiatan live art di sekolah'
    },
    {
        img: koserReligi,
        ket: 'Kesempatan besar bagi kami dapat ikut seta dalam mengisi acara religi yang diadakan oleh Pemerintah Kota Madiun'
    },
    {
        img: smp11,
        ket: 'Mengikuti perlombaan band di SMP 11 Madiun dan Mendapat juara 2'
    },
    {
        img: tourBasketSekolah,
        ket: 'mengikuti ekskul basket dan mengikuti perlombaan basket yang ada di sekolah'
    }
]

export default section