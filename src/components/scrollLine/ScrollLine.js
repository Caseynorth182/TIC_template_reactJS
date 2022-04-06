import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const imageObj = [
    {
        url: 'https://tic.sladko.digital/wp-content/uploads/2021/11/1.svg'
    },
    {
        url: 'https://tic.sladko.digital/wp-content/uploads/2021/11/2.svg'
    },
    {
        url: 'https://tic.sladko.digital/wp-content/uploads/2021/11/3.svg'
    },
    {
        url: 'https://tic.sladko.digital/wp-content/uploads/2021/11/4.svg'
    },
    {
        url: 'https://tic.sladko.digital/wp-content/uploads/2021/11/5.svg'
    },
    {
        url: 'https://tic.sladko.digital/wp-content/uploads/2021/11/6.svg'
    }
]



const ScrollLine = () => {
    const boxRef = useRef();
    const elements = imageObj.map(item => {
        return <img ref={boxRef} src={item.url} alt="" class="about__slider-element" />
    })
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({
            scrollTrigger: {
                trigger: ".about__slider",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        })
            .fromTo(".about__slider-element", {
                x: -140,
            },
                {
                    x: 140,
                },
                {
                    x: -140
                }
            );
    });
    return (
        <>
            <div class="about__slider">
                <div class="about__slider-wrapper">
                    {elements}
                </div>
            </div>
        </>
    )
}

export default ScrollLine;