import {useState, useEffect} from 'react';

const usePersistedState = (key, initialState) => {
    const [state, setState] = useState(null);
    
    const setPersistedState = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    useEffect(() => {
        if (localStorage.getItem(key)) {
            setState(JSON.parse(localStorage.getItem(key)))
        }
        else {
            setPersistedState(initialState)
        }
    }, []);

    return [state, setPersistedState]
}

export default usePersistedState