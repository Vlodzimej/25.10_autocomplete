import React from 'react';

import './App.css';

const Autocomplete = ({ onChange }) => (
    <input onFocus={alert} type="text" placeholder="value" onChange={onChange} />
);

const App = () => {
    const [state, setState] = React.useState(0);



    return (
        <div>
            <h1>{state}</h1>
            <Autocomplete  onChange={e => setState(e.target.value)} />
        </div>
    )

};


export default App;

// Autocomplete.PropTypes = {
//     fetchData: PropTypes.func.isRequired,
//     valueField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
//     textField: PropTypes.string.isRequired,
//     noOptionMessage: PropTypes.string,
//     className: PropTypes.string,
//     // menuClassName: PropTypes.string,
//     placeholder: PropTypes.string,
//     label: PropTypes.string,
//     // options: PropTypes.object.isRequired,
//     onChange: PropTypes.func.isRequired,
//     renderItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
// };