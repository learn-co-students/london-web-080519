import React from 'react'

export default ({ buttonText, onSearch }) => {
    return (
        <div>
            <input />
            <button onClick={onSearch}>{buttonText}</button>
        </div>
    )
}