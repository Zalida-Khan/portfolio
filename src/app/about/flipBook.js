import React, { useState } from 'react';
import Image from 'next/image';

export default function Flipbook() {
    const [isOpened, setIsOpened] = useState(false);
    const handleCheckboxChange = () => setIsOpened(!isOpened);


    const handleTransitionEnd = () => {
        const coverElement = document.querySelector('.cover');
        coverElement.classList.add('flipped');
    };
    
    const orderedPages = [
        { leftImage: 'second-left.jpg', rightImage: 'first-right.jpg' },
        { leftImage: 'third-left.jpg', rightImage: 'second-right.jpg' },
        { leftImage: 'fourth-left.jpg', rightImage: 'third-right.jpg' },
        { leftImage: 'fifth-left.jpg', rightImage: 'fourth-right.jpg' },
        { leftImage: 'last-left.jpg', rightImage: 'fifth-right.jpg' },
    ];
    
    return (
        <div className={`flipbookContainer ${isOpened ? 'opened' : ''}`}>
        <input type="checkbox" id="checkboxCover" onChange={handleCheckboxChange} />
        <div className="book">
            <div className="cover" onTransitionEnd={handleTransitionEnd}>
                <label htmlFor="checkboxCover"></label>
            </div>
            </div>
        </div>
    );
}