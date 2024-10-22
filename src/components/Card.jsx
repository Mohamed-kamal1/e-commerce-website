import { colors } from "../style.js";
import PropTypes from "prop-types";
function Card(props) {
    return (
        <>
            <div
                className="flex flex-col flex-none lg:basis-1/4 md:basis-1/3 basis-full px-5">
                {props.children}
            </div>
        </>
    );
}
function CardImage(props) {
    return (
        <>
            <div
                style={{backgroundColor: colors.secondary,}}
                className="flex justify-center items-center xl:p-16 lg:p-10 p-8 relative overflow-y-hidden group h-4/6 aspect-square"
            >
                <img
                    className=" object-cover group-hover:scale-110 transition-all duration-300"
                    src={props.src}
                    alt=""
                />
                <div
                    className="absolute w-full bg-black bg-opacity-50 flex justify-center items-center cursor-pointer
                    h-fit py-2 -bottom-1/4 group-hover:bottom-0 transition-all duration-300 text-white"
                    onClick={props.onClick}
                >Add To Cart</div>
            </div>
        </>
    );
}
function CardDetails(props) {
    return (
        <>
            <div className="flex flex-col my-3 gap-2 h-2/6">
                {props.children}
            </div>
        </>
    );
}

function CardName(props) {
    return (
        <>
            <h1
                style={{color: colors.text2, fontFamily: 'Poppins, serif'}}
                className="font-semibold  text-base"
            >{props.name}</h1>
        </>
    );
}

function Price(props) {
    return (
        <>
            <div className="flex gap-4 text-sm font-medium">
                <span style={{color: colors.secondary2,}}>{props.price}</span>
                <span style={{color: colors.text1, textDecoration: 'line-through'}}>{props.oldPrice}</span>
            </div>
        </>
    );
}

function Rate(props) {
    return (
        <>
            <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, i) => (
                    <img
                        key={i} className={(i < props.stars ? "" : "grayscale") + " w-5 h-5 f"}
                        src={"assets/star-gold.png"} alt=""/>
                ))}
                <span
                    style={{color: colors.text1}}
                    className="text-black text-lg ml-2">({props.rate})
                </span>
            </div>
        </>
    );
}



Card.propTypes = {
    children: PropTypes.node,
};
CardImage.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func,
};
CardDetails.propTypes = {
    children: PropTypes.node,
};
CardName.propTypes = {
    name: PropTypes.string,
};
Price.propTypes = {
    price: PropTypes.string,
    oldPrice: PropTypes.string,
};
Rate.propTypes = {
    rate: PropTypes.number,
    stars: PropTypes.number,
};


export {Card , Rate , Price , CardName , CardDetails , CardImage};