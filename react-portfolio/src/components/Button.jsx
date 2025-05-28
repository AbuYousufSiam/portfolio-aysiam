export default function Button({variant ="primary", label, onClick}){
    //Props (short for "properties") are the inputs to a component. 
    //variant: either "primary" or "secondary" (default is "primary")
    //label: the text to show inside the button

    const styles = {
        primary: {
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer"
        },
        secondary: {
            ackgroundColor: "#e7e7e7",
            color: "black",
            padding: "10px 20px",
            border: "1px solid #ccc",
            cursor: "pointer"
        }
    };

    return (
        <button onClick={onClick} style={styles[variant]}>{label}</button>
    );
}