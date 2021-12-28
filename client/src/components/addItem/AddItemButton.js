import React from 'react'
import './additem.css'

export default function AddItemButton({ setAddActive }) {
    return (
        <div className="addItemButton" onClick={()=>setAddActive(true)}>
            <i className="fa-solid fa-plus"></i>
        </div>
    )
}
