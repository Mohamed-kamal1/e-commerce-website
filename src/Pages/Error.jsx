import {useNavigate} from "react-router-dom";
import {Button} from "../components/Button.jsx";
import {colors} from "../style.js";

export function Error() {
    const navigate = useNavigate();
    return (
        <>
                <div className={"flex flex-col h-96 my-20 justify-center items-center gap-10"}>
                    <h1 className={"text-8xl"}>404 Not Found</h1>
                    <h1>Your visited page not found. You may go home page.</h1>
                    <Button
                        BackgroundColor={colors.button2}
                        hoverColor={colors.button2Hover}
                        color={colors.text}
                        width={"250px"}
                        className={"mt-10"}
                        onClick={()=> navigate("/Home")}
                    >
                        Back to home page
                    </Button>
                </div>
        </>
    )
}