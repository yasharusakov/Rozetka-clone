import {StrictMode} from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import store from './redux/index'
import './firebase'

render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)