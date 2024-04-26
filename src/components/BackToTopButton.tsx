import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to detect scroll position
    function toggleVisibility() {
        if (window.pageYOffset > 300) {  // If the user scrolled more than 300 pixels
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to handle the "scroll to top" button click
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // for smoothly scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                className='fixed bottom-5 right-5 size-12 text-2xl'
                onClick={scrollToTop}
            >
                ↑
            </button>
        )
    );
};

export default BackToTopButton;
