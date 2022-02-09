import Header from '../Header';
import SideBar from '../SideBar';

import '../../styles/style.scss';
import './App.scss';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="wrapper__container">
                    <main>
                        <SideBar/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default App;