import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPopup } from '../../slices/globalSlice';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, serverTimestamp, doc } from 'firebase/firestore';

import mask from '../../utils/mask';

import Loader from '../Loader';

function Register() {
    const dispatch = useDispatch();
    const db = getFirestore();
    const auth = getAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const ref = useRef(null);

    const createUser = async (e) => {
        e.preventDefault();

        setLoading(true);

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

                setDoc(doc(db, 'users', user.uid), {
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    email: email,
                    password: password,
                    createdAt: serverTimestamp()
                });

                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setPassword('');
                setLoading(false);

                setTimeout(() => {
                    dispatch(setPopup({name: 'register', type: false}));
                }, 500);

            })
            .catch(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        mask(ref.current, setPhoneNumber);
    }, []);

    return (
        <div className="register-login">
            <form onSubmit={createUser} className="register-login__form">
                <span>Имя</span>
                <input disabled={loading} className="register-login__form__firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required type="text" />
                <span>Фамилия</span>
                <input disabled={loading} className="register-login__form__lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required type="text" />
                <span>Номер телефона</span>
                <input ref={ref} disabled={loading} className="register-login__form__numberPhone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required type="text" />
                <span>Эл. почта</span>
                <input disabled={loading} className="register-login__form__email" value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
                <span>Придумайте пароль</span>
                <input disabled={loading} className="register-login__form__password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required type="text" />
                <button disabled={loading} className="register-login__form__main-button" type="submit">Зарегистрироваться</button>
                {loading ? <Loader/> : null}
                <button type="button" disabled={loading} onClick={() => {
                    dispatch(setPopup({name: 'register', type: false}));
                    dispatch(setPopup({name: 'login', type: true}));
                }} className="register-login__register">Я уже зарегистрирован</button>
            </form>
        </div>
    )
}

export default Register;