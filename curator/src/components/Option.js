import React, { Component } from 'react';
import Select, { Async } from 'react-select';

const Option = ({options, placeholder, onSelect, values, field}) => {
    return (
        <div className={ field.className }>
            <label>{ field.label }</label>
            <Select multi
                value={ values }
                onChange={ onSelect }
                searchable={ true }
                placeholder={ placeholder }
                options={ options } />
        </div>
    );
}

export default Option;
