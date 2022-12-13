import { useState } from 'react';
import Home from './views/Home';
import About from './views/About'
import Header from './components/Header/Header';
import counterContext from './contexts/counterContext';
const App = () => {
    const [currentComponent, setCurrentComponent] = useState(<Home />);
    const [counter, setCounter] = useState(0);
    const componentIndex = [
        { name: 'home', displayName: "Home", component: <Home /> },
        { name: 'about', displayName: "About", component: <About /> }
    ]

    const handleNav = (navTo) => {
        setCurrentComponent(componentIndex[componentIndex.findIndex((predicate) => predicate.name === navTo)].component)
    }
    return (
        <counterContext.Provider value={{ counter, setCounter }}>
            <div className='h-screen bg-indigo-200'>
                <Header componentIndex={componentIndex} handleNav={handleNav} />
                <div className=''>
                    {currentComponent}
                </div>
            </div>
        </counterContext.Provider>
    )
}

export default App;
