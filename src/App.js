// library
import { FiAlignJustify } from "react-icons/fi"
// component
import Navbar from './component/navbar'
// style
import './style/body.css'
import './style/navbar.css'
import './style/section.css'
import './style/aside.css'
import photo from './style/photo_profile.jpg'

// view
const App = () => {
  return (
    <body>
        <Navbar />
        <FiAlignJustify className='icon-menu-nav'/>
        <aside>
            <img src={photo}></img>
            <small>hello! i'm</small>
            <h2>Deco Prasetya</h2>
            <p>Saya Deco, Full-Stack Developer dengan spesialisasi di React.js dan Node.js. Selama 1 tahun terakhir, saya membantu startup dan UMKM mengubah ide mereka menjadi aplikasi web yang powerful. Saya percaya teknologi seharusnya memecahkan masalah nyata dengan solusi yang elegan.<br></br><br></br>Di waktu luang, saya senang berkontribusi ke proyek open source dan menulis tutorial pemrograman. Terus belajar dan berbagi pengetahuan adalah prinsip saya.</p>
            <ul>
                <a href="https://www.instagram.com/decomposisi"><button className="instagram" >INSTAGRAM</button></a>
                <a href="https://www.tiktok.com/@decoprasertya"><button className="tiktok" >TIKTOK</button></a>
                <a href="https://wa.me/628960312041"><button className="wa" >WHATSAPP</button></a>
            </ul>
        </aside>
    </body>
  );
}

export default App;
