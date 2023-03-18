import {useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Loader from '../Loader'
import {useActions} from '../../hooks/useActions'

function Login() {
    const {setPopup} = useActions()
    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signIn = async (e) => {
        e.preventDefault()

        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setEmail('')
                setPassword('')
                setLoading(false)

                setTimeout(() => {
                    setPopup({name: 'login', type: false})
                }, 500)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <div className="register-login">
            <form onSubmit={signIn} className="register-login__form">
                <span>Эл. почта</span>
                <input
                    disabled={loading}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
                <span>Пароль</span>
                <input
                    disabled={loading}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <button disabled={loading} className="register-login__form__main-button">
                    Войти
                </button>
                {loading && <Loader/>}
                <button
                    disabled={loading}
                    type="button"
                    onClick={() => {
                        setPopup({name: 'login', type: false})
                        setPopup({name: 'register', type: true})
                    }}
                    className="register-login__register"
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}

export default Login