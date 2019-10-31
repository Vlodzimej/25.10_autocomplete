import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './assets/css/style.css';

export const Autocomplete = ({
    label,
    onChange,
    fetchData,
    textField,
    valueField,
}) => {
    const [list, setList] = React.useState([]);
    const [value, setValue] = React.useState('');

    return (
        <Fragment>
            <div>Key: {value}</div>
            <label htmlFor="autocomplete_input">{label}</label>
            <input
                type="text"
                placeholder="value"
                name="autocomplete_input"
                onChange={onChange}
                onKeyUp={() => {
                    fetchData().then(res => setList(res.data));
                }}
            />
            {list.length > 0 && (
                <div className="autocomplete">
                    {list.map(item => (
                        <div
                            key={item[valueField]}
                            className="autocomplete__item"
                            onClick={() => setValue(item[valueField])}
                        >
                            {item[textField]}
                        </div>
                    ))}
                </div>
            )}
        </Fragment>
    );
};

Autocomplete.propTypes = {
    fetchData: PropTypes.func.isRequired,
    valueField: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        .isRequired,
    textField: PropTypes.string.isRequired,
    noOptionMessage: PropTypes.string,
    className: PropTypes.string,
    // menuClassName: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    // options: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    renderItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
