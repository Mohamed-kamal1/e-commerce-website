import {Form, Input} from "../components/Form.jsx";
import {Button} from "../components/Button.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import {colors} from "../style.js";

export function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function validateSignup(event) {
        event.preventDefault();
        if(name !== '' && email !== '' &&  password !== '') {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let user = users.find(user => user.email === email);
            if (user) {
                alert("User already exists");
                return;
            }
            users.push({email: email, password: password, name: name});
            localStorage.setItem('users', JSON.stringify(users));
            alert("Signup successful");
            navigate('/e-commerce-website/login');
        }
    }

    return (
        <>
            <div
                className="flex mx-auto my-12 lg:w-11/12 md:w-full lg:gap-20 gap-10">
                {/*image*/}
                <div className="hidden md:flex flex-1 ">
                    <img src={"./assets/signup.png"} alt={''}/>
                </div>
                {/*Content*/}
                <div className="flex-1 my-auto">
                    <div className="my-auto xl:mx-20 lg:mx-10 mx-2" >
                        <h1 className="text-4xl font-bold mb-2">Create an account</h1>
                        <p className="text-gray-500 mb-10">Enter your details below </p>
                        <Form onSubmit={validateSignup}>
                            <Input
                                type="text"
                                id="Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Name"
                                required={true}
                                name={"Name"}
                                errorMessage={"Please enter a valid name."}
                            />
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
                            <Button
                                type={"submit"}
                                width="100%"
                                color="white"
                                BackgroundColor={colors.button2}
                                className={'mt-5'}
                            >
                                Sign Up
                            </Button>
                            <Button
                                type={"button"}
                                width="100%"
                                color={colors.text2}
                                BackgroundColor={colors.primary}
                                hoverColor={colors.button1Hover}
                                className={'flex justify-center gap-4 border-2 border-neutral-500'}
                            >
                                <img
                                    src={".//assets/google.png"} alt={""}
                                    className="xl:w-6 xl:h-6 w-5 h-5"
                                />
                                Sign up with Google
                            </Button>
                            <p className="self-center">Already have an account?
                                <a href="/e-commerce-website/login" className="underline ml-3">Login</a>
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>

        </>
    )
}