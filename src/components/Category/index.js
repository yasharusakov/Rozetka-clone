import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { doc, getDoc, getFirestore, query, collection, orderBy, onSnapshot } from "firebase/firestore";

import CategoryBigSlider from './CategoryBigSlider';
import CategorySmallSlider from './CategorySmallSlider';
import CategoryItems from './CategoryItems';

import './Category.scss';

function Category() {
    const db = getFirestore();
    const {id} = useParams();
    const [category, setCategory] = useState({});

    const requestCategory = async () => {
        const docRef = doc(db, 'category', id);
        const docSnap = await getDoc(docRef);

        const q = query(collection(db, 'category', id, 'items'), orderBy('timestamp'));

        const unsub = onSnapshot(q, (snapshot) => {
            setCategory(
                {
                    ...docSnap.data(), 
                    items: snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                }
            );
        });

        return unsub;
    }

    useEffect(() => {
        requestCategory();
    }, []);

    return (
        <div className="category">
            <div className="category__name">{category.name}</div>
            <CategoryBigSlider pictures={category.bigSliderPicture} />
            <CategorySmallSlider pictures={category.smallSliderPicture}/>
            <CategoryItems items={category.items} />
        </div>
    )
}

export default Category;