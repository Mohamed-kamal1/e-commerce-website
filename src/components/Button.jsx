import PropTypes  from 'prop-types';
import {colors} from "../style.js";



function Button(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: props.width,
                    cursor: 'pointer',
                }}
            >
                <button
                    type={props.type}
                    style={{
                        backgroundColor: props.BackgroundColor,
                        color: props.color,
                    }}
                    className={props.className+ " p-3 border-0 rounded"}
                    onClick={props.onClick}
                    onMouseOver={
                        (e) => {
                            e.target.style.backgroundColor = props.hoverColor || colors.button2Hover;
                            e.target.style.color = colors.text2;

                        }
                    }
                    onMouseOut={
                        (e) => {
                            e.target.style.backgroundColor = props.BackgroundColor;
                            e.target.style.color = props.color;
                        }
                    }
                    >
                    {props.children}
                </button>
            </div>

        </>
    )
}

Button.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    BackgroundColor: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
};



export { Button }