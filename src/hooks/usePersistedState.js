import { useState, useEffect } from 'react';

const usePersistedState = (key, initialState) => {
    const [state, setState] = useState(initialState);
    
    const setPersistedState = value => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    useEffect(() => {
        if (localStorage.getItem(key)) {
            setState(JSON.parse(localStorage.getItem(key)))
        }
    });

    return [state, setPersistedState]
}

export default usePersistedState