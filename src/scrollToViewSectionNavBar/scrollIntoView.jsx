import React, { useRef } from 'react';
import './scrollIntoView.css';

export default function ScrollToSectionNav() {
    const section1 = useRef(null); 
    const section2 = useRef(null);
    const section3 = useRef(null);
    const top = useRef(null);

    const scrollIntoView = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div>  
            {/* Nav bar */}
            <nav ref={top}>
                <ul>
                    <li onClick={() => scrollIntoView(section1)}> Section 1 </li>
                    <li onClick={() => scrollIntoView(section2)}> Section 2 </li>
                    <li onClick={() => scrollIntoView(section3)}> Section 3 </li>
                </ul>
            </nav>

            <section ref={section1} className='sect1'>
                <p> Content 1 </p>
            </section>
            <section ref={section2} className='sect2'>
                <p> Content 2 </p>
            </section>
            <section ref={section3} className='sect3'> 
                <p> Content 3 </p>
                
                <button onClick={() => scrollIntoView(top)}> Go to Top </button>
            </section>
        </div>
    );
}

