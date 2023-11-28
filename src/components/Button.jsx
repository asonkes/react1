const Button = (props) => {
    return ( 
        <button onClick={props.veillir}>
            +{props.plus}
        </button>
     );
}
 
export default Button;