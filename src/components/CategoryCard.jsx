import PropTypes from "prop-types";

export function CategoryCard(props) {
    return (
        <>
            <div
                className="flex-none
                lg:basis-1/6 md:basis-1/4 basis-1/2
                px-3
                ">
                <div className="flex flex-col items-center justify-center  gap-4 border-2 rounded border-black aspect-square
                 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]  group
                 ">
                    <img src={props.src} alt="" className="xl:px-14 px-10  object-cover group-hover:invert"/>
                    <h1 className="font-normal text-base px-4">{props.title}</h1>
                </div>

            </div>
        </>
    )
}

CategoryCard.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
}