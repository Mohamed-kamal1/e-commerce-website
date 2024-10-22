import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Button} from "../components/Button.jsx";
import {colors} from "../style.js";
import {useNavigate} from "react-router-dom";

export function Cart() {
    const [subtotal, setSubtotal] = useState(0);
    const [cartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const navigate = useNavigate();

    useEffect(() => {
        updateSubtotal();
    }, []);
    // function to update subtotal
    const updateSubtotal = () => {
        let total = 0;
        const cartItems= JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        setSubtotal(total);
    };
    return (
        <>
            <div className={"flex flex-col lg:mx-auto mx-4 lg:w-11/12  gap-10 my-14"}>
                <div className={"flex gap-2 text-neutral-500"}>
                        <a className="cursor-pointer" href="/e-commerce-website/Home">Home</a>
                        /
                        <a className="text-black">Cart</a>
                </div>
                <Row>
                    <div className={"flex basis-1/4"}>Products</div>
                    <div className={"md:flex hidden basis-1/4 justify-center"}>Price</div>
                    <div className={"flex basis-1/4 justify-center"}>Quantity</div>
                    <div className={"flex basis-1/4 justify-end"}>Subtotal</div>
                </Row>
                {cartItems.map((item, index) => (
                    <Item
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                    />
                ))}
                <div className={"flex justify-between"}>
                    <Button
                        BackgroundColor={"#fff"}
                        hoverColor={"#fff"}
                        width={"200px"}
                        onClick={() => navigate("/e-commerce-website/Home")}
                        className="text-neutral-950 outline outline-1 outline-neutral-700 rounded hover:invert"
                    >Return To Shop</Button>
                    <Button
                        BackgroundColor={"#fff"}
                        hoverColor={"#fff"}
                        width={"200px"}
                        className="text-neutral-950 outline outline-1 outline-neutral-700  hover:invert"
                        onClick={updateSubtotal}
                    >Update Cart</Button>
                </div>
                <div className="flex lg:flex-row flex-col  justify-between lg:items-start items-center gap-4">
                    <div className="flex md:flex-row flex-col gap-2">
                        <input
                            className={"md:w-60 w-52 border border-neutral-500 rounded p-2"}
                            type={"text"}
                            placeholder={"Coupon Code"}
                        />
                        <Button
                            BackgroundColor={colors.button2}
                            hoverColor={colors.button2Hover}
                            color={colors.text}
                            width={"208px"}
                            className=""
                        >Apply Coupon</Button>
                    </div>
                    <div className="flex flex-col md:w-96 w-72 p-8 rounded border-2 border-black gap-3 ">
                        <h1 className="text-lg font-medium mb-2">Cart Total</h1>
                        <div className="flex justify-between ">
                            <div>Subtotal:</div>
                            <div>${subtotal.toFixed(2)}</div>
                        </div>
                        <hr/>
                        <div className="flex justify-between">
                            <div>Shipping:</div>
                            <div>Free</div>
                        </div>
                        <hr/>
                        <div className="flex justify-between">
                            <div>Total:</div>
                            <div>${subtotal.toFixed(2)}</div>
                        </div>
                        <div className={"self-center mt-2"}>
                            <Button
                                BackgroundColor={colors.button2}
                                hoverColor={colors.button2Hover}
                                color={colors.text}
                                width={"200px"}
                                onClick={() => {navigate("/e-commerce-website/Checkout");}}
                            >Proceed To Checkout</Button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

function Row(props) {
    return (
        <>
            <div
                style={{
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }}
                className={"flex justify-between items-center px-10 py-5"}
            >
                {props.children}
            </div>
        </>
    )
}

function Item(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    // function to update quantity in local storage
    const updateQuantity = (quantity) => {
        setQuantity(quantity);
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        console.log("cart:" + cartItems);
        cartItems.forEach(item => {
            console.log("item:" + item.name);
            console.log("props:" + props.name);
            if (item.name === props.name) {
                console.log("updating quantity");
                item.quantity = quantity;
            }
        console.log("updated cart:" + item.quantity);
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    // function to remove item from cart in local storage
    const removeItem = () => {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let newCart = cartItems.filter(item => item.name !== props.name);
        localStorage.setItem("cartItems", JSON.stringify(newCart));
        window.location.reload();
    }
    return (
        <>
           <Row>
                <div className={"relative h-14 flex basis-1/4 items-center gap-4 text-sm"}>
                    <div
                        onClick={removeItem}
                        className={"absolute -top-1 -left-1 rounded-full w-5 h-5 p-1 cursor-pointer bg-red-700"}
                    >
                        <img src={"assets/close.png"} alt={"close"}/>
                    </div>
                    <img className={"h-full hidden md:flex"} src={props.image} alt={props.name}/>{props.name}
                </div>
                <div className={"md:flex hidden basis-1/4 justify-center"}>${props.price}</div>
                <div className={"flex basis-1/4 justify-center"}>
                     <input
                          onChange={(e) => updateQuantity(e.target.value)}
                          className={"w-16 border border-neutral-500 rounded px-4 p-2"}
                          type={"number"} min={1} value={quantity}
                     />
                </div>
                <div className={"flex basis-1/4 justify-end"}>${quantity * props.price}</div>
            </Row>
        </>
    )

}

Item.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
}
Row.propTypes = {
    children: PropTypes.node,
}