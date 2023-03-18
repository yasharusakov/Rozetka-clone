import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../Header'
import SideBar from '../SideBar'
import Content from '../Content'
import Category from '../Category'
import ProductsCategory from '../ProductsCategory'
import Product from '../Product'
import Footer from '../Footer'
import {useEffect} from 'react'
import {useActions} from '../../hooks/useActions'
import '../../assets/styles/style.scss'
import './style.scss'

function App() {
    const {setAllToCart} = useActions()

    useEffect(() => {
        setAllToCart()
    }, [])

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
                        <Route path="c/:categoryID" element={
                            <>
                                <div className="main-container">
                                    <Category/>
                                </div>
                                <Footer/>
                            </>
                        }/>
                        <Route path="c/:categoryID/:productsID" element={
                            <>
                                <div className="main-container">
                                    <ProductsCategory/>
                                </div>
                                <Footer/>
                            </>
                        }/>
                        <Route path="p/:productID" element={
                            <>
                                <Product/>
                                <Footer/>
                            </>
                        }/>
                        <Route path="search/:data" element={
                            <>
                                <div className="main-container">
                                    <ProductsCategory useData={true}/>
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

export default App