import React from 'react'
import Filter from './Filter'
import './filters.css'

export default function Filters({activeFilters}) {
    return (
        <div className="filter-bar">
            {activeFilters.map(i => <Filter key={i} name={i}/>)}
        </div>
    )
}
