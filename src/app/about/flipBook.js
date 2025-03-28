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
            {orderedPages.map((_, index) => (
                <input type="checkbox" id={`checkboxPage${index + 1}`} key={`checkbox${index}`} />
            ))}
            <input type="checkbox" id="checkboxBackCover" />

            <div className="book">
                <div className="cover" onTransitionEnd={handleTransitionEnd}>
                    <label htmlFor="checkboxCover"></label>
                </div>

                {orderedPages.map((page, index) => (
                    <div className="page" id={`page${index + 1}`} key={index}>
                        {page.rightImage && (
                            <div className="frontPage absolute flex items-center justify-center z-1 w-full h-full rounded-l-[15px]">
                                <label htmlFor={`checkboxPage${index + 1}`}>
                                    <Image
                                        className="right"
                                        src={`/images/about/${page.rightImage}`}
                                        alt={`Page ${index + 1} Right`}
                                        width={500}
                                        height={500}
                                    />
                                </label>
                            </div>
                        )}

                        {page.leftImage && (
                            <div className="backPage absolute flex items-center justify-center z-1 w-full h-full rounded-l-[15px]">
                                <label htmlFor={`checkboxPage${index + 1}`}>
                                    <Image
                                        className="left"
                                        src={`/images/about/${page.leftImage}`}
                                        alt={`Page ${index + 1} Left`}
                                        width={500}
                                        height={500}
                                    />
                                </label>
                            </div>
                        )}
                    </div>
                ))}

                <div className="backCover"></div>
            </div>
        </div>
    );
}