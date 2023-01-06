import reactLogo from './assets/images/react.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <img src="/vite.svg" className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1 className="text-3xl font-bold underline">
                Vite + React + Storybook + Cypress + ESLint + Prettier
            </h1>
        </div>
    );
}

export default App;
