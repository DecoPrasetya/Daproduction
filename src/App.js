// library
import { FiAlignJustify } from "react-icons/fi"
// component
import Navbar from './component/navbar'
import Section from './component/section'
// style
import './style/body.css'
import photo from './style/photo_profile.jpg'

// view
const App = () => {
  return (
    <body>
        <Navbar />
        <aside>
            <img src={photo}></img>
            <small>hello! i'm</small>
            <h2>Deco Prasetya</h2>
            <p>Saya Deco, Full-Stack Developer junior dengan spesialisasi di React.js dan Node.js. ini adalah web portofolio saya yang saya buat dengan tujuan agar client atau perusahaan dapat melihat personal biodata serta track record saya dalam bidang web software developer. <br></br><br></br>Di waktu luang, saya senang berkontribusi ke proyek open source dan menulis tutorial pemrograman. Terus belajar dan berbagi pengetahuan adalah prinsip saya.</p>
            <h4>Contact Me</h4>
            <ul>
                <a href="https://www.instagram.com/decomposisi"><button className="instagram" >INSTAGRAM</button></a>
                <a href="https://www.tiktok.com/@decoprasertya"><button className="tiktok" >TIKTOK</button></a>
                <a href="https://wa.me/628960312041"><button className="wa" >WHATSAPP</button></a>
            </ul>
        </aside>
        <Section />
    </body>
  );
}

export default App;
