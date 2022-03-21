import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Home1 from './Components/Home1/Home1'
import Home2 from './Components/Home2/Home2'
import Case from './Components/Case/Case'
import Author from './Components/Author/Author'
import Application from './Components/Application/Application'
import Contact from './Components/Contact/Contact'
import Review from './Components/Review/Review'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
    return (
        <div>
            <Sidebar />
            <Header />
            <Home1 />
            <Home2 />
            <Case />
            <Author />
            <Review />
            <Application />
            <Contact />
        </div>
    )
}

export default App
