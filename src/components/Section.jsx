import PropTypes from "prop-types";
import {colors} from "../style.js";
import {Button} from "./Button.jsx";
import {useState} from "react";
import {Scroll} from "./Slider.jsx";
function Section(props) {
    return (
        <>
            <section className={"flex flex-col mx-auto my-2 lg:w-11/12 md:w-full md:gap-20 gap-10 mt-40"}>
                {props.children}
            </section>
        </>
    )
}
function CardsContainer(props) {
    return (
        <div ref={props.Ref} className={props.className+" flex overflow-x-hidden snap-x snap-mandatory"}>
            {props.children}
        </div>
    );
}

function SectionHeader(props) {
    return (
        <>
            <div className="flex md:flex-row flex-col gap-6 justify-between px-5">
                <div className="flex flex-col gap-6">
                    <div
                        style={{color: colors.secondary2,}}
                        className="flex gap-4 items-center text-base font-semibold"
                    >
                        <span
                            style={{backgroundColor: colors.secondary2,}}
                            className="w-5 h-10 inline-block rounded"
                        ></span>
                        {props.tag}
                    </div>
                    <div>
                        <h1  className="md:text-4xl text-2xl font-semibold space tracking-wider">
                            {props.title}
                        </h1>
                    </div>
                </div>
                <div className="flex items-end md:justify-end justify-center">
                    {
                        props.viewAll?
                            <Button className={"py-4"} width={"160px"}  BackgroundColor={colors.button2} color={colors.text}>View all</Button>
                            :<div className="flex gap-4">
                                <Arrow direction={"left"} Ref={props.Ref}/>
                                <Arrow direction={"right"}  Ref={props.Ref}/>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

function SectionFooter() {
    return (
        <>
            <div className="flex justify-center">
                <Button className={"py-4"} width={"260px"}  BackgroundColor={colors.button2} color={colors.text}>View All Products</Button>
            </div>
        </>
    )
}

const baseStyle = {
    backgroundColor: colors.secondary,
};

const hoverStyle = {
    backgroundColor: colors.secondary2,
};
function Arrow({ direction,Ref }) {
    const [hover, setHover] = useState(false);
    return (
        <img
            style={hover ? { ...baseStyle, ...hoverStyle } : baseStyle}
            className={"w-14 h-14 rounded-full bg-neutral-200 hover:bg-neutral-500 p-2"}
            src={direction === "left" ?"assets/left-arrow.png":"assets/right-arrow.png" } alt=""
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={()=>Scroll(direction,Ref)}
        />
    );
}

Arrow.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    Ref: PropTypes.object,
};

Section.propTypes = {
    children: PropTypes.node,
};

SectionHeader.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    viewAll: PropTypes.bool,
    Ref: PropTypes.object,
};
CardsContainer.propTypes = {
    children: PropTypes.node,
    Ref: PropTypes.object,
    className: PropTypes.string,
};
export {Section, SectionHeader , SectionFooter,CardsContainer, Arrow};