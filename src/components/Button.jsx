function Button(props) {
    // console.log(props)
    return (
        <>
            <button {...props}>{props.children}</button>
        </>
    );
}

export default Button;
