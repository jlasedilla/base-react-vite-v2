import { Provider } from 'react-redux';
import { store } from '~/services/store';

import reactLogo from './assets/images/react.svg';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div>
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </div>
            </div>
        </Provider>
    );
}

export default App;
