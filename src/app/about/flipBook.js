import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

export default function Flipbook() {
    const [isOpened, setIsOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 5;

    const handleCheckboxChange = () => setIsOpened(!isOpened);

    const resetBook = () => {
        setIsOpened(false);
        setCurrentPage(0);
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    const swipeHandlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === "Left" && currentPage < totalPages) {
                document.getElementById(`checkboxPage${currentPage + 1}`)?.click();
                setCurrentPage(currentPage + 1);
            } else if (eventData.dir === "Right" && currentPage > 0) {
                document.getElementById(`checkboxPage${currentPage}`)?.click();
                setCurrentPage(currentPage - 1);
            }
        },
        trackMouse: true,
    });

    const orderedPages = [
        { leftImage: "second-left.jpg", rightImage: "first-right.jpg" },
        { leftImage: "third-left.jpg", rightImage: "second-right.jpg" },
        { leftImage: "fourth-left.jpg", rightImage: "third-right.jpg" },
        { leftImage: "fifth-left.jpg", rightImage: "fourth-right.jpg" },
        { leftImage: "last-left.jpg", rightImage: "fifth-right.jpg" },
    ];

    return (
        <div {...swipeHandlers} className={`flipbookContainer ${isOpened ? "opened" : ""}`}>
            <input type="checkbox" id="checkboxCover" onChange={handleCheckboxChange} />
            {orderedPages.map((_, index) => (
                <input type="checkbox" id={`checkboxPage${index + 1}`} key={`checkbox${index}`} />
            ))}
            <input type="checkbox" id="checkboxBackCover" />

            <div className="book">
                <div className="cover">
                    <label className="flex w-full h-full" htmlFor="checkboxCover">
                        <Image src="/images/about/cover-front.jpg" alt="cover" width={500} height={600} />
                    </label>
                </div>

                {orderedPages.map((page, index) => (
                    <div className="page" id={`page${index + 1}`} key={index}>
                        {page.rightImage && (
                            <div className="frontPage w-full h-full rounded-l-[15px]">
                                <label htmlFor={`checkboxPage${index + 1}`}>
                                    <Image className="right" src={`/images/about/${page.rightImage}`} alt={`Page ${index + 1} Right`} width={500} height={600} />
                                </label>
                            </div>
                        )}

                        {page.leftImage && (
                            <div className="backPage absolute w-full h-full rounded-l-[15px]">
                                <label htmlFor={`checkboxPage${index + 1}`}>
                                    <Image className="left" src={`/images/about/${page.leftImage}`} alt={`Page ${index + 1} Left`} width={500} height={600} />
                                </label>
                            </div>
                        )}
                    </div>
                ))}

                <div className="backCover" onClick={resetBook}>
                    <Image src="/images/about/backcover-inside.jpg" alt="back cover inside" width={500} height={600} />
                </div>
            </div>
        </div>
    );
}