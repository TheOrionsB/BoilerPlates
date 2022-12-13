import { createContext } from 'react';

const counterContext = createContext({
    counter: {},
    setCounter: (newCount) => {}
})

export default counterContext;