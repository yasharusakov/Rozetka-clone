import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {doc, getDoc, getFirestore} from 'firebase/firestore'

import CategoryBigSlider from './CategoryBigSlider'
import CategorySmallSlider from './CategorySmallSlider'
import CategoryItems from './CategoryItems'

import './style.scss'

function Category() {
    const db = getFirestore()
    const {categoryID} = useParams()
    const [category, setCategory] = useState({})

    const requestCategory = async () => {
        const docRef = doc(db, 'category', categoryID)
        const docSnap = await getDoc(docRef)

        setCategory(docSnap.data())
    }

    useEffect(() => {
        requestCategory()
    }, [])

    return (
        <div className="category">
            <div className="category__name">{category.name}</div>
            <CategoryBigSlider pictures={category.bigSliderPicture}/>
            <CategorySmallSlider pictures={category.smallSliderPicture}/>
            <CategoryItems categoryID={categoryID} items={category.items}/>
        </div>
    )
}

export default Category