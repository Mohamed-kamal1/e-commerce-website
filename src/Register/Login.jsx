import {Form, Input} from "../components/Form.jsx";
import {Button} from "../components/Button.jsx";

export function Login() {
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
                        <Form>
                            <Input
                                type="email"
                                id="Email"
                                placeholder="Email"
                                required={true}
                                name={"Email"}
                                errorMessage={"Please enter a valid email address."}
                            />
                            <Input
                                type="password"
                                id="Password"
                                placeholder="Password"
                                required={true}
                                name={"Password"}
                                errorMessage={"Please enter a valid password."}
                            />
                            <Button
                                type={"submit"}
                                width="100%"
                                color="white"
                                BackgroundColor="var(--button2)"
                                className={'mt-10'}
                            >
                                Login
                            </Button>
                            <a href="#" className="">Forgot password?</a>
                        </Form>
                    </div>
                </div>

            </div>

        </>
    )
}