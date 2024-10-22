import PropTypes from "prop-types";
import {Section} from "./Section.jsx";

function Footer() {
    return (
        <>
            <footer
                className="
                w-full bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                text-white
                py-20 px-5
                lg:px-10
                xl:px-28 xl:py-32
                gap-20
                "
            >
                <div className="flex flex-col gap-10 ">
                    <h1 className="xl:text-5xl text-4xl font-medium">Exclusive</h1>
                    <div className="flex xl:gap-4 gap-3">
                        <Icon src={"assets/facebook.png"}/>
                        <Icon src={"assets/tik-tok.png"}/>
                        <Icon src={"assets/instagram.png"}/>
                        <Icon src={"assets/linkedin.png"}/>
                    </div>
                </div>
                <Links>
                    <LinksHead>Account</LinksHead>
                    <Link>My Account</Link>
                    <Link>Login / Register</Link>
                    <Link>Track Order</Link>
                    <Link>Wishlist</Link>
                    <Link>Cart</Link>
                </Links>
                <Links>
                    <LinksHead>Quick Links</LinksHead>
                    <Link>Privacy Policy</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>FAQs</Link>
                    <Link>Contact Us</Link>
                </Links>
                <Links>
                    <LinksHead>Support</LinksHead>
                    <Link>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Link>
                    <Link>exclusive@gmail.com</Link>
                    <Link>+880 123 456 789</Link>

                </Links>
            </footer>
        </>
    )
}

function Footer2() {
    function Icon(props){
        return (
            <div className={"flex flex-col items-center justify-center gap-2"}>
                <div className={"p-2 bg-neutral-400 rounded-full w-16 h-16 mb-4"}>
                    <img className={"bg-black rounded-full p-2"} src={props.src} alt={""}/>
                </div>
                <h1 className={"text-center text-xl font-semibold"}>{props.title}</h1>
                <h1 className={"text-center text-sm"}>{props.title2}</h1>
            </div>
        )
    }
    Icon.propTypes = {
        src: PropTypes.string,
        title: PropTypes.string,
        title2: PropTypes.string
    }

    return (
        <>
            <Section>
                <div className="flex md:flex-row flex-col gap-10 justify-around lg:mx-10 mb-20">
                    <Icon src={"assets/delivery.png"} title={"FREE AND FAST DELIVERY"} title2={"Free delivery for all orders over $140"}/>
                    <Icon src={"assets/customer-service.png"} title={"24/7 CUSTOMER SERVICE"} title2={"Friendly 24/7 customer support"}/>
                    <Icon src={"assets/secure.png"} title={"MONEY BACK GUARANTEE"} title2={"We reurn money within 30 days"}/>
                </div>
            </Section>

        </>
    )
}

function Icon({src}) {
    return (
        <img
            className="xl:w-10 xl:h-10 w-8 h-8 p-1.5 rounded bg-[#313131] hover:bg-[#1F1F1F] hover:shadow-[0_0_5px_#9B9B9B]"
            src={src}
            alt=""
        />
    )
}

function Link({children}) {
    return (
        <a
            href={"#"}
            className="text-xl font-normal text-neutral-400 hover:text-white"
        >
            {children}
        </a>
    )
}

function Links({children}) {
    return (
        <div className="flex flex-col gap-5">
            {children}
        </div>
    )
}
function LinksHead({children}) {
    return (
        <h1 className="text-2xl font-medium mb-5">
            {children}
        </h1>
    )
}



Icon.propTypes = {src: PropTypes.string}
Link.propTypes = {
    src: PropTypes.string,
    children: PropTypes.string
}
Links.propTypes = {children: PropTypes.array}
LinksHead.propTypes = {children: PropTypes.string}


export {Footer, Footer2};