import React from 'react';

import './App.css';
import { Autocomplete } from './Autocomplete';
import Axios from 'axios';

const App = () => {
    const [state, setState] = React.useState(0);

    return (
        <div>
            <h1>{state}</h1>
            <Autocomplete
                label={'Country'}
                textField={'name'}
                valueField={'code'}
                onChange={e => setState(e.target.value)}
                fetchData={() => {
                    return Axios.get('http://localhost:3001/country', {
                        params: { value: state },
                    });
                }}
            />
        </div>
    );
};

export default App;
