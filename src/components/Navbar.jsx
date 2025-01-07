import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white fixed top-0 left-0 right-0 z-50'>
            <div className="mycontainer flex justify-between items-center px-4 py-7 h-12">
                <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl font-bol  text-blue-900 ml-1">&lt;</span>
                    <span className="text-3xl font-bold text-white mr-2">Pass</span>
                    <span className="text-3xl font-bold text-blue-500">Vault</span>
                    <span className="text-2xl font-bold text-blue-900 ml-1">&frasl;&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4 '>
                    <Link className="btn btn-outline-primary" to="/" role="button">Pass Vault</Link>
                    <Link className="btn btn-outline-primary" to="/trynow" role="button">TRY NOW!</Link>
                    <Link className="btn btn-outline-primary" to="/About" role="button">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
