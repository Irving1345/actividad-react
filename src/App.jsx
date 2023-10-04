import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import Astros from './Components/Astros.jsx'
import AboutMe from './components/AboutMe.jsx';
import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'About', href: '/AboutMe'},
        { name: 'Astros', href: '/astros'},
    ]

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />

                    <Route 
                    element={<AboutMe />}
                    path='/AboutMe'
                />
            </Routes>
        </>
    )
}




export default App
