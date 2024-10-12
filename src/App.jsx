import './App.css'
import {Header} from "./components/Header.jsx";
import {Login} from "./Register/Login.jsx";
import {Footer} from "./components/Footer.jsx";
import {Card, CardDetails, CardImage, CardName, Price, Rate} from "./components/Card.jsx";
import {Section, SectionHeader ,CardsContainer} from "./components/Section.jsx";
import {useRef} from "react";

function App() {
    const containerRef = useRef(null);

    return (
            <>
                    <Header/>
                    <Login/>
                    <Footer/>
                <Section>
                    <SectionHeader tag={"Category"} title={"Top Selling Products"} viewAll={false}  Ref={containerRef}/>
                    <CardsContainer Ref={containerRef}>
                        <Card>
                            <CardImage src={"assets/image1.png"}/>
                            <CardDetails>
                                <CardName name={"Product 1"}/>
                                <Price price={"$100"} oldPrice={"$150"}/>
                                <Rate stars={4} rate={200}/>
                            </CardDetails>
                        </Card>
                        <Card>
                            <CardImage src={"assets/image1.png"}/>
                            <CardDetails>
                                <CardName name={"Product 2"}/>
                                <Price price={"$200"} oldPrice={"$250"}/>
                                <Rate stars={3} rate={100}/>
                            </CardDetails>
                        </Card>
                        <Card>
                            <CardImage src={"assets/image1.png"}/>
                            <CardDetails>
                                <CardName name={"Product 3"}/>
                                <Price price={"$300"} oldPrice={"$350"}/>
                                <Rate stars={5} rate={500}/>
                            </CardDetails>
                        </Card>
                        <Card>
                            <CardImage src={"assets/image1.png"}/>
                            <CardDetails>
                                <CardName name={"Product 4"}/>
                                <Price price={"$400"} oldPrice={"$450"}/>
                                <Rate stars={2} rate={50}/>
                            </CardDetails>
                        </Card>
                        <Card>
                            <CardImage src={"assets/image1.png"}/>
                            <CardDetails>
                                <CardName name={"Product 4"}/>
                                <Price price={"$400"} oldPrice={"$450"}/>
                                <Rate stars={2} rate={50}/>
                            </CardDetails>
                        </Card> <Card>
                        <CardImage src={"assets/image1.png"}/>
                        <CardDetails>
                            <CardName name={"Product 4"}/>
                            <Price price={"$400"} oldPrice={"$450"}/>
                            <Rate stars={2} rate={50}/>
                        </CardDetails>
                    </Card>

                    </CardsContainer>

                </Section>
            </>
        )
}

export default App
