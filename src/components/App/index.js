import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';
import Category from '../Category';
import Footer from '../Footer';

import '../../styles/style.scss';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="wrapper__container">
                    <Routes>
                        <Route path="/" element={
                            <main className="main-container">
                                <SideBar/>
                                <Content/>
                            </main>
                        }/>
                        <Route path="/c/:id" element={
                            <>
                                <div className="main-container">
                                    <Category/>
                                </div>
                                <Footer/>
                            </>
                        }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;