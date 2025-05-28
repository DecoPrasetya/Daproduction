// library
import { FiAlignJustify } from "react-icons/fi"
// component
import Navbar from './component/navbar'
import Section from './component/section'
import Aside from './component/aside'
// style
import './style/body.css'

// view
const App = () => {
  return (
    <body>
        <Navbar />
        <Aside />
        <Section />
    </body>
  );
}

export default App;
