import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';
import Category from '../Category';
import ProductsCategory from '../ProductsCategory';
import Product from '../Product';
import Footer from '../Footer';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllToCart } from '../../slices/inCartSlice';

import '../../styles/style.scss';
import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAllToCart())
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;