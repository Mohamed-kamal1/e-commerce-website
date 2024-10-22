import {Aside} from "../components/Aside.jsx";
import {Slider} from "../components/Slider.jsx";
import {CardsContainer, Section, SectionFooter, SectionHeader} from "../components/Section.jsx";
import {Card, CardDetails, CardImage, CardName, Price, Rate} from "../components/Card.jsx";
import {useEffect, useRef, useState} from "react";
import {CategoryCard} from "../components/CategoryCard.jsx";
import {colors} from "../style.js";
import {Button} from "../components/Button.jsx";
import PropTypes from "prop-types";
import {Products,Categories} from "../../public/data.json";
import {Footer2} from "../components/Footer.jsx";

function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const index = cartItems.findIndex(item => item.name === product.name);
    if (index === -1) {
        cartItems.push({...product, quantity: 1});
    } else {
        cartItems[index].quantity++;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function Home() {
    const [productsArray, setProductsArray] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const products = data.products.map(product => ({
                    name: product.title,
                    price: product.price,
                    stars: Math.floor(product.rating),
                    discount: product.discountPercentage,
                    oldPrice: Math.ceil(product.price + (product.price * product.discountPercentage / 100))-0.01,
                    image: product.images[0],
                    rate: Math.ceil(Math.random() * 100),
                    categories: product.tags,
                }));
                setProductsArray(products);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const products = productsArray.concat(Products);
    const categories = Categories
    const TodayRef = useRef(null);
    const CategoriesRef = useRef(null);
    const topSellingRef = useRef(null);
    const ourProductsRef = useRef(null);
    return (
        <>
            <div className="flex lg:mx-auto mx-2 lg:w-11/12  my-5 gap-4 md:h-80 h-96">
                <Aside/>
                <hr className={"md:block hidden border-gray-200 border-r h-full"}/>
                <Slider>
                </Slider>
            </div>
            {/*Today's*/}
            <Section>
                <SectionHeader tag={"Today’s"} title={"Flash Sales"} viewAll={false} Ref={TodayRef}/>
                <CardsContainer Ref={TodayRef}>
                    {products.filter(product => product.oldPrice!=='').map((product, index) => (
                        <Card key={index}>
                            <CardImage src={product.image} onClick={()=>addToCart(product)}/>
                            <CardDetails>
                                <CardName name={product.name}/>
                                <Price price={"$"+product.price} oldPrice={product.oldPrice?"$"+product.oldPrice:''}/>
                                <Rate stars={product.stars} rate={product.rate}/>
                            </CardDetails>
                        </Card>
                    ))}
                </CardsContainer>
                <SectionFooter/>
            </Section>
            {/*Categories*/}
            <Section>
                <SectionHeader tag={"Category"} title={"Browse By Category"} viewAll={false} Ref={CategoriesRef}/>
                <CardsContainer Ref={CategoriesRef}>
                    {categories.map((category, index) => (
                        <CategoryCard key={index} title={category.title} src={category.image}/>
                    ))}
                </CardsContainer>
            </Section>
            {/*Top Selling Products*/}
            <Section>
                <SectionHeader tag={"This Month"} title={"Best Selling Products"} viewAll={true} Ref={topSellingRef}/>
                <CardsContainer Ref={topSellingRef} className={"md:flex-wrap "}>
                    {products.filter(product =>product.rate > 88).slice(0,8).map((product, index) => (
                        <Card key={index}>
                            <CardImage src={product.image} onClick={()=>addToCart(product)}/>
                            <CardDetails>
                                <CardName name={product.name}/>
                                <Price price={"$"+product.price} oldPrice={product.oldPrice?"$"+product.oldPrice:''}/>
                                <Rate stars={product.stars} rate={product.rate}/>
                            </CardDetails>
                        </Card>
                    ))}
                </CardsContainer>
            </Section>
            {/*cover*/}
            <Section>
                <div
                    style={{
                        backgroundImage:`linear-gradient(90deg, rgba(0, 0, 0, 1)50% ,${colors.primary2}, rgba(0, 0, 0, 1) )`
                    }}
                    className="flex md:flex-row flex-col justify-center gap-10 mb-5 bg-neutral-950 lg:p-16 py-10 px-6">
                    <div className="flex flex-col gap-8 basis-1/2">
                        <h1
                            style={{color: colors.button1,}}
                            className=" text-base font-semibold text-white">Categories</h1>
                        <h1 className="xl:text-5xl text-4xl text-white">Enhance Your Music Experience.</h1>
                        <div className="flex lg:gap-3 gap-2 ">
                            <Time num={10} name={"Days"}/>
                            <Time num={20} name={"Hours"}/>
                            <Time num={30} name={"Minutes"}/>
                            <Time num={40} name={"Seconds"}/>
                        </div>
                        <Button
                            color={colors.text}
                            BackgroundColor={colors.button1}
                            hoverColor={colors.button1Hover}
                            width={"180px"}
                        >Buy Now</Button>

                    </div>
                    <div className="flex items-center justify-center">
                        <img src={"assets/cover.png"} className="w-full" alt={''}/>
                    </div>
                </div>
            </Section>
            {/*Our Products */}
            <Section>
                <SectionHeader tag={"Our Products"} title={"Explore Our Products"} viewAll={false} Ref={ourProductsRef}/>
                <CardsContainer Ref={ourProductsRef}>
                    {products.map((product, index) => (
                        <Card key={index}>
                            <CardImage src={product.image} onClick={()=>addToCart(product)}/>
                            <CardDetails>
                                <CardName name={product.name}/>
                                <Price price={"$"+product.price} oldPrice={product.oldPrice?"$"+product.oldPrice:''}/>
                                <Rate stars={product.stars} rate={product.rate}/>
                            </CardDetails>
                        </Card>
                    ))}
                </CardsContainer>
                <SectionFooter/>
            </Section>
            {/*New Arrival*/}
            <Section>
                <SectionHeader tag={"Featured"} title={"New Arrival"} viewAll={true}/>
                <div className={"grid"}>
                    <div className={"grid lg:grid-cols-2 gap-8"}>
                        {/*col 1*/}
                        <div
                            className={"relative flex rounded px-10 bg-black justify-center pt-20"}>
                            <img src={"assets/ps5.png"} className="w-full" alt={''}/>
                            <div className={"flex flex-col absolute md:bottom-9 md:left-9 left-2 bottom-2 xl:w-2/5 w-1/2 md:gap-4 gap-2 md:tracking-widest" }>
                                <h1 className="md:text-2xl text-md text-white font-semibold">PlayStation 5</h1>
                                <h1 className="md:text-sm text-xs text-white leading-6">Black and White version of the PS5 coming out on sale.</h1>
                                <a className="text-white  md:text-base text-sm underline underline-offset-4 ">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        {/*col2*/}
                        <div className={"grid md:grid-rows-2 gap-8"}>
                            {/*col2 row 1*/}
                            <div className={"relative bg-black flex items-end justify-end "}>
                                <img src={"assets/Woman.png"} className="w-2/3" alt={''}/>
                                <div className={"flex flex-col absolute md:bottom-9 md:left-9 left-2 bottom-2 xl:w-5/12 md:w-1/2 w-3/5 xl:gap-4 gap-2 xl:tracking-widest md:tracking-wide"}>
                                    <h1 className="md:text-2xl text-md text-white font-semibold">Women’s Collections</h1>
                                    <h1 className="md:text-sm text-xs text-white md:leading-6">Featured woman collections that give you another vibe.</h1>
                                    <a className="text-white md:text-base text-sm underline underline-offset-4 ">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                            {/*col2 row 2*/}
                            <div className={"grid md:grid-cols-2 gap-8"}>
                                <div
                                    style={{backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 1) ,${colors.primary2},rgba(0, 0, 0, 1)`}}
                                    className={"relative bg-black p-10"}>
                                    <img src={"assets/Speakers.png"} className="w-full" alt={''}/>
                                    <div
                                        className={"flex flex-col absolute xl:bottom-9 x:left-9 bottom-2 left-2  xl:gap-2 xl:tracking-widest"}>
                                        <h1 className="md:text-2xl text-md text-white font-semibold">Speakers</h1>
                                        <h1 className="md:text-sm text-xs text-white leading-6">Amazon wireless speakers</h1>
                                        <a className="text-white  md:text-base text-sm underline underline-offset-4 ">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div
                                    style={{backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 1) ,${colors.primary2},rgba(0, 0, 0, 1)`}}
                                    className={"relative bg-black p-10"}>
                                    <img src={"assets/Perfume.png"} className="w-full" alt={''}/>
                                    <div
                                        className={"flex flex-col absolute xl:bottom-9 x:left-9 bottom-2 left-2  xl:gap-2 xl:tracking-widest"}>
                                        <h1 className="md:text-2xl text-md text-white font-semibold">Perfume</h1>
                                        <h1 className="md:text-sm text-xs text-white leading-6">GUCCI INTENSE OUD EDP</h1>
                                        <a className="text-white  md:text-base text-sm underline underline-offset-4 ">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Section>
            {/*Footer*/}
            <Footer2/>
        </>
    )
}

function Time(props) {
    return (
        <>
            <div
                className="rounded-full bg-white aspect-square text-center text-wrap p-2 w-16 h-16">
                <div className="font-semibold">{props.num}</div>
                <div
                    className="text-xs">{props.name}
                </div>
            </div>
        </>
    )

}
Time.propTypes = {
    num: PropTypes.number,
    name: PropTypes.string,
}

export {Home};

