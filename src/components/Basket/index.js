import basket from '../../assets/resources/svg/basket.svg'
import goodstub from '../../assets/resources/svg/goods-stub.svg'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import {Fragment, useEffect, useState, useMemo} from 'react'
import {useSelector} from 'react-redux'
import observer from '../../utils/observer'
import {useActions} from '../../hooks/useActions'
import './style.scss'

function Basket() {
    const {removeAllProducts, removeProduct} = useActions()
    const db = getFirestore()
    const inCart = useSelector(state => state.inCart.inCart)
    const [products, setProducts] = useState([])

    const requestProduct = async () => {
        return await Promise.all(inCart.map(async item => {
            const docRef = doc(db, 'products', item)
            const docSnap = await getDoc(docRef)
            const docData = {...docSnap.data(), productID: docSnap.id}
            return docData
        }))
    }

    useEffect(() => {
        requestProduct()
            .then(data => setProducts(data))
    }, [inCart])

    useEffect(() => {
        observer()
    }, [products])

    const Button = ({value}) => {
        const [popupDelete, setPopupDelete] = useState(false)

        function setDelete() {
            setPopupDelete(false)
        }

        useEffect(() => {
            document.addEventListener('mouseup', setDelete)
            return () => document.removeEventListener('mouseup', setDelete)
        }, [])

        return (
            <div onClick={() => setPopupDelete(true)}
                 className={popupDelete ? 'basket__element__points active' : 'basket__element__points'}>
                <span></span><span></span><span></span>
                <button onClick={() => removeProduct(value)}>Удалить</button>
            </div>
        )
    }

    const Counter = () => {
        const [counter, setCounter] = useState(1)

        return (
            <div className="basket__additional__counter">
                <button
                    disabled={counter === 1}
                    onClick={() => setCounter(counter => counter - 1)}>-
                </button>
                <input
                    onBlur={(e) => e.target.value < 1 && setCounter(1)}
                    value={counter}
                    onChange={(e) => setCounter(+e.target.value.replace(/\D/, ''))}
                    type="text"/>
                <button onClick={() => setCounter(counter => counter + 1)}>+</button>
            </div>
        )
    }

    const elements = useMemo(() => {
        return products.map((item, index) => {
            return (
                <Fragment key={item.productID}>
                    <div data-src={item.url} className="basket__element element-animation">
                        <div className="basket__element__picture element-target">
                            <img src={goodstub} alt={item.url}/>
                        </div>
                        <div className="basket__element__name">{item.name} <strong>/</strong> {item.characteristic}
                        </div>
                        <Button value={item.productID}/>
                    </div>
                    <div className="basket__additional">
                        <Counter value={item.counter} index={index}/>
                        <div className="basket__additional__price">{item.comparedPrice} ₴</div>
                    </div>
                    <div className="line"></div>
                </Fragment>
            )
        })
    }, [products])

    const generalPrice = useMemo(() => {
        return products.reduce((prevValue, currentValue) => prevValue + currentValue.comparedPrice, 0)
    }, [products])

    return (
        <div className="basket">
            <div className="basket__container">
                {
                    products.length === 0 ? (
                        <div className="basket__nothing">
                            <img src={basket} alt="basket"/>
                            <div className="basket__nothing__title">Корзина пуста</div>
                            <div className="basket__nothing__sub-title">Но это никогда не поздно исправить :)</div>
                        </div>
                    ) : (
                        <div className="basket__have-elements">
                            <div>
                                <div onClick={() => removeAllProducts()} className="basket__remove-all"><span>Удалить все</span>
                                </div>
                                <div className="basket__elements">
                                    {elements}
                                </div>
                            </div>
                            <div className="basket__general-price">
                                <div className="price">
                                    <div className="price__total-price">
                                        <div>Итого</div>
                                        <div>{generalPrice} ₴</div>
                                    </div>
                                    <button className="price__button">Оформить заказ</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Basket