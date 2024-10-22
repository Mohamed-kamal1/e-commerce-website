import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {colors} from "../style.js";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
const navigation = [
    { name: 'Home', href: 'Home', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Header() {
    const navigate = useNavigate();
    const [isLogin,setLogin] = useState(localStorage.getItem('login'));
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const [cartCount, setCartCount] = useState(cartItems.length);
    useEffect(
        () => {
            setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
        },[cartItems]);
    useEffect(
        () => {

            setCartCount(cartItems.length);
        },[cartItems]
    );

    function signOut() {
        setLogin('false');
        localStorage.removeItem('login');
        localStorage.removeItem('cartItems');
        navigate('/login');
        window.location.reload();
    }
    return (
        <>
            <Disclosure as="nav" className="">
                <div className="mx-auto my-2 lg:w-11/12 md:w-full">
                    <div className="relative flex h-16 lg:items-center lg:justify-between gap-4 mx-1">
                        <div className=" flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton
                                className="group relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden"/>
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block"/>
                            </DisclosureButton>
                        </div>
                        <div
                            className="flex flex-1 items-center justify-center xl:gap-40 lg:gap-14 sm:items-stretch sm:justify-start">
                            {/*nav brand*/}
                            <div className="flex flex-shrink-0 font-bold xl:text-2xl text-xl items-center">
                                Exclusive
                            </div>
                            {/*nav links*/}
                            <div className="hidden lg:block">
                                <div className="flex space-x-2 xl:space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            to={item.href}
                                            key={item.name}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                'xl:text-lg text-sm px-2 py-2 font-medium',
                                                item.current ? 'underline text-black' : 'text-gray-500 hover:underline hover:text-black',
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            {/* Profile dropdown */}
                            {
                                isLogin ?
                                    <Menu as="div" className="hidden lg:flex relative ml-3 gap-4 items-center ">
                                        {/*search*/}

                                        <div className="flex p-0.5 bg-gray-100">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className=" py-1 px-2 bg-gray-100 text-sm xl:text-lg"
                                            />
                                            <button className=" py-1 px-2 ">
                                                <img alt="" src={"./assets/search.png"}
                                                     className="xl:h-7 xl:w-7 h-5 w-5"/>
                                            </button>
                                        </div>
                                        <div>
                                            <img alt="" src={"./assets/heart.png"} className="xl:h-7 xl:w-7 h-5 w-5"/>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="cursor-pointer relative"
                                        >
                                            {cartCount > 0 &&
                                            <div
                                                style={{backgroundColor: colors.secondary2}}
                                                className="w-5 h-5 flex text-xs text-white rounded-full absolute -top-2 -right-2 justify-center items-center"
                                            >
                                                {cartCount}
                                            </div>
                                            }
                                            <img alt="" src={"./assets/shopping-cart.png"}
                                                 className="xl:h-7 xl:w-7 h-5 w-5"/>

                                        </Link>
                                        <div
                                            className="p-1 rounded-full bg-white hover:invert"
                                        >
                                            <MenuButton
                                                className="relative flex rounded-full">
                                                <span className="absolute -inset-1.5"/>
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    alt=""
                                                    src={"./assets/user.png"}
                                                    className="xl:h-6 xl:w-6 h-5 w-5 rounded-full invert"
                                                />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                            transition
                                            className="absolute top-0 right-0 z-10 mt-8 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <MenuItem>
                                                <a
                                                   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Your Profile
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Settings
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link
                                                    to="/login"
                                                   onClick={signOut}
                                                   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Sign out
                                                </Link>
                                            </MenuItem>
                                        </MenuItems>

                                    </Menu>
                                    :
                                    <Link
                                        key= "SignUp"
                                        to="/"
                                        className={classNames(
                                            'xl:text-lg text-sm px-2 py-2 font-medium',
                                            'text-gray-500 hover:underline hover:text-black',
                                        )}
                                    >
                                        Sign Up
                                    </Link>
                            }


                        </div>
                    </div>
                    <hr className="border-t border-gray-200"/>
                </div>
                <DisclosurePanel className="lg:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-950 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}

