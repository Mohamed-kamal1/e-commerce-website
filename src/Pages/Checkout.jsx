import {Form} from "../components/Form.jsx";
import PropTypes from "prop-types";
import {colors} from "../style.js";
import {Button} from "../components/Button.jsx";
import {useEffect, useState} from "react";
export function Checkout() {
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let total = 0;
        const cartItems= JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.forEach(item => {total += item.price * item.quantity;});
        setSubtotal(total);
    }, []);

    return (
        <>
            <div className={"flex flex-col lg:mx-auto mx-4 lg:w-11/12  gap-10 my-14"}>
                <div className={"flex gap-2 text-neutral-500"}>
                    <a className="cursor-pointer" href="/e-commerce-website/Home">Home</a>
                    /
                    <a className="cursor-pointer" href="/e-commerce-website/cart">Cart</a>
                    /
                    <a className="text-black">Checkout</a>
                </div>
                <h1 className={"text-4xl"}>Billing Details</h1>
                <div className={"flex justify-between"}>
                    <div className={"flex flex-col basis-1/3 gap-6"}>
                        <Form>
                            <Input label={"Full Name"} required={true}/>
                            <Input label={"Company Name"}/>
                            <Input label={"Email Address"} required={true}/>
                            <Input label={"Phone Number"} required={true}/>
                            <Input label={"Town/City"} required={true}/>
                            <Input label={"Street Address"} required={true}/>
                            <Input label={"Apartment, floor, etc. "}/>
                        </Form>
                    </div>
                    <div className="flex basis-1/3 m-10 flex-col items-start">
                        <div className="flex flex-col md:w-96 w-72 gap-3 ">
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
                            <div className={"flex gap-2 mt-4"}>
                                <input
                                    type="radio"
                                    name="payment"
                                    id="credit"
                                    className="cursor-pointer w-4"
                                />
                                <label htmlFor="credit" className="cursor-pointer">Bank</label>
                            </div>
                            <div className={"flex gap-2 mt-2"}>
                                <input
                                    type="radio"
                                    name="payment"
                                    id="paypal"
                                    className="cursor-pointer w-4"
                                />
                                <label htmlFor="paypal" className="cursor-pointer">Cash on delivery</label>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col gap-2 mt-6">
                            <input
                                className={"w-60  border border-neutral-500 rounded p-2"}
                                type={"text"}
                                placeholder={"Coupon Code"}
                            />
                            <Button
                                BackgroundColor={colors.button2}
                                hoverColor={colors.button2Hover}
                                color={colors.text}
                                width={"200px"}
                                className="text-base"
                            >Apply Coupon</Button>
                        </div>
                        <div className={"mt-4"}>
                            <Button
                                BackgroundColor={colors.button2}
                                hoverColor={colors.button2Hover}
                                color={colors.text}
                                width={"200px"}
                            >Place order</Button>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

function Input(props) {
    return (
        <label className={"flex flex-col gap-1"}>
            <div className={"text-base text-black text-opacity-50 flex gap-1"}>
                {props.label}
                {props.required && <span className={"text-red-500 text-sm"}>*</span>}
            </div>
            <input
                style={{
                    backgroundColor: colors.secondary
                }}
                type="text"
                required={props.required}
                className={"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"}/>
        </label>

    )
}

Input.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
}