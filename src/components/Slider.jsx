import { colors } from "../style.js";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function Slider() {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) ,${colors.ultramarine} )`,
            icon: "assets/apple.png",
            title: "iPhone 16 Series",
            description: "Installments for 36 months",
            image: "assets/iphone.png"
        },
        {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) ,${colors.desertSand})`,
            icon: "assets/apple.png",
            title: "iPhone 16 Pro",
            description: "Installments for 36 months",
            image: "assets/iphone-pro.png"
        },
        {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) ,rgba(0, 0, 0, 1))`,
            icon: "assets/apple.png",
            title: "Watch 10",
            description: "Thinstant classic",
            image: "assets/watch1.png"
        },
        {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) ,rgba(0, 0, 0, 1))`,
            icon: "assets/apple.png",
            title: "Watch 2 Ultra",
            description: "New finish. Never quit.",
            image: "assets/watch2.png"
        },
        {
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1)30% ,${colors.primary2}, rgba(0, 0, 0, 1) )`,
            icon: "assets/apple.png",
            title: "Air Pods 4",
            description: "Now supersonic.",
            image: "assets/airPods.png"
        },
        // Add more slides as needed
    ];

    // Set the current index based on the scroll position
    useEffect(() => {
        const handleScroll = () => {
            const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
            setCurrentIndex(index);
        };

        sliderRef.current.addEventListener('scroll', handleScroll);
        return () => sliderRef.current.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to the selected slide when the index changes
    const scrollToSlide = (index) => {
        const width = sliderRef.current.offsetWidth;
        sliderRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    };

    return (
        <div className="relative md:w-4/5 w-full h-full ">
            <div
                ref={sliderRef}
                className="flex overflow-x-hidden snap-x snap-mandatory h-full"
            >
                {slides.map((slide, index) => (
                    <Slide key={index} {...slide} />
                ))}
            </div>
            <div className="absolute inset-0 flex justify-between items-center">
                <div
                    className="bg-black bg-opacity-20 text-white p-2  hover:bg-black hover:bg-opacity-50 cursor-pointer"
                    onClick={() => Scroll('left', sliderRef)}
                >&#10094;</div>
                <div
                    className="bg-black bg-opacity-20 text-white p-2  hover:bg-black hover:bg-opacity-50 cursor-pointer"
                    onClick={() => Scroll('right', sliderRef)}
                >&#10095;</div>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full bg-white ${index === currentIndex ? 'bg-opacity-10' : 'bg-opacity-90'}`}
                        onClick={() => scrollToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

// Slide component
function Slide(props) {
    return (
        <div
            style={{
                backgroundImage: props.backgroundImage,
            }}
            className="flex flex-col md:flex-row p-10 h-full flex-none basis-full"
        >
            <div className="flex flex-col basis-2/5 md:gap-6 gap-3">
                <div className="flex gap-4 items-center">
                    <img
                        className="w-10 h-10"
                        src={props.icon} alt=""
                    />
                    <h2 className="text-base mt-2 text-white">{props.title}</h2>
                </div>
                <p className="lg:text-5xl text-3xl text-white ">
                    {props.description}
                </p>
                <div className="flex gap-2 items-center cursor-pointer">
                    <a
                        className="text-lg text-white w-fit font-medium underline underline-offset-8 py-1"
                        href={props.link}
                    >Shop Now</a>
                    <img
                        className="w-8 h-7 invert"
                        src={"assets/right-arrow.png"} alt=''
                    />
                </div>
            </div>
            <div className="flex basis-3/5 lg:p-10 p-4 justify-center items-center">
                <img
                    className="object-cover"
                    src={props.image} alt=""
                />
            </div>
        </div>
    );
}

// Scroll function
function Scroll(direction, Ref) {
    const width = (Ref.current) ? Ref.current.firstChild.offsetWidth : 0;
    console.log(width);
    const totalWidth = Ref.current.scrollWidth;
    const visibleWidth = Ref.current.offsetWidth;
    const currentScroll = Ref.current.scrollLeft;
    if (direction === 'left') {
        if (currentScroll === 0) {
            Ref.current.scrollTo({ left: totalWidth - visibleWidth, behavior: 'smooth' });
        } else {
            Ref.current.scrollBy({ left: -width, behavior: 'smooth' });
        }
    } else {
        if (currentScroll + visibleWidth >= totalWidth - 10) {
            Ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            Ref.current.scrollBy({ left: width, behavior: 'smooth' });
        }
    }
}

Slide.propTypes = {
    backgroundImage: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
};

export { Slider, Slide, Scroll };