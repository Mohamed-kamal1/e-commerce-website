import  {useState} from "react";
import PropTypes from "prop-types";
import {colors} from "../style.js";
function Form(props) {
    const [formValid] = useState(true);


    return (

            <form
                style={{
                }}
                className={props.className +" needs-validation flex flex-col gap-2"}
                noValidate
                onSubmit={() => {
                    props.onSubmit(event);
                }
            }
                action={"submit"}
            >
                {props.children}
                {!formValid && <p className="text-red-700 font-light">Please correct the errors above.</p>}

            </form>

    )
}

// Form Input
function Input(props) {
    return (
        <>
            <div>
                <input
                    style={{
                        width: '100%',
                        color: colors.text2,
                        border: "none",
                        borderBottom: "1px solid var(--text2)",
                        outlineWidth: "1px",
                        outlineColor: colors.text2,
                    }}
                    type={props.type}
                    id={props.id}
                    name={props.name}
                    className={props.className + " peer block flex-1  py-3 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-lg "}
                    placeholder={props.placeholder}
                    required={props.required}
                    formNoValidate={true}
                    onChange={props.onChange}
                />
                {/*display none*/}
                <p className="hidden peer-invalid:block text-red-700 font-light">
                    {props.errorMessage}
                </p>
                <p className="hidden peer-valid:block text-green-700 font-light">
                    Looks good!
                </p>
            </div>
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func
};
Form.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onSubmit: PropTypes.func
};


export {Form, Input};