import {Form, Input} from "../components/Form.jsx";
import {Button} from "../components/Button.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function validateLogin(event) {
        event.preventDefault();
        const form = event.target;
        const [email, password] = form.elements;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(user => user.email === email.value && user.password === password.value);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('login', JSON.parse(true));
            localStorage.setItem('cartItems', JSON.stringify([]));
            navigate('/e-commerce-website/Home');
            window.location.reload();
        } else {
            alert("Invalid email or password");
        }
    }
    return (
        <>
            <div
                className="flex  mx-auto my-12 lg:w-11/12 md:w-full lg:gap-20 gap-10">
                {/*image*/}
                <div className="hidden md:flex flex-1 ">
                    <img src={"./assets/signup.png"} alt={''}/>
                </div>
                {/*Content*/}
                <div className="flex-1 my-auto">
                    <div className="xl:m-20 lg:mx-10 mx-2" >
                        <h1 className="text-4xl font-bold mb-2">Log in to Exclusive</h1>
                        <p className="text-gray-500 mb-10">Enter your details below </p>
                        <Form onSubmit={validateLogin}>
                            <Input
                                type="email"
                                id="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                                required={true}
                                name={"Email"}
                                errorMessage={"Please enter a valid email address."}
                            />
                            <Input
                                type="password"
                                id="Password"
                                onChange={(e) => setPassword(e.target.value) }
                                value={password}
                                placeholder="Password"
                                required={true}
                                name={"Password"}
                                errorMessage={"Please enter a valid password."}
                            />
                            <div className={"flex mt-10 justify-between items-center"}>
                                <Button
                                    type={"submit"}
                                    width="30%"
                                    color="white"
                                    BackgroundColor="var(--button2)"
                                >
                                    Login
                                </Button>
                                <a
                                    style={{color: "var(--button2)"}}
                                    href="#" className=""
                                >Forgot password?</a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>

        </>
    )
}