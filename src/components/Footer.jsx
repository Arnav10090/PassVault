import React from 'react';

const Footer = () => {
    return (
        <div
            className='bg-slate-800 text-white flex flex-col justify-center items-center w-full
                bottom-0 left-0 right-0'>
            <div className="flex items-center justify-center mb-1">
                <span className="text-3xl font-bold text-blue-900 ml-1">&lt;</span>
                <span className="text-4xl font-bold text-white mr-2">Pass</span>
                <span className="text-4xl font-bold text-blue-500">Vault</span>
                <span className="text-3xl font-bold text-blue-900 ml-1">&frasl;&gt;</span>
            </div>
            <div className='flex justify-center items-center'>Created by Arnav Tiwari</div>
        </div>
    );
}

export default Footer;