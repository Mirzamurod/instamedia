import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Case from './Components/Case/Case'
import Author from './Components/Author/Author'
import Review from './Components/Review/Review'
import Application from './Components/Application/Application'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
    return (
        <div>
            <Sidebar />
            <Header />
            <Case />
            <Author />
            <Review />
            <Application />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
