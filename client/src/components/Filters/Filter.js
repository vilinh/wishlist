import React from 'react'

export default function Filter({name}) {
    return (
        <div className="filter">
            <p>{name}</p>
            <i className="filx fas fa-times"></i>
        </div>
    )
}
