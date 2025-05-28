import { useState, useEffect } from "react";
import Button from "../components/Button";
//useState is used to store and manage data (in this case, text).
//useEffect is used to run code after the component has rendered (used here to simulate typing).

export default function Home(){
    
    <Button
    label="Download Resume"
    onClick={() => window.open("/resume.pdf")}
    variant="primary"
    size="lg"
    />

    const [text, setText] = useState(''); //Initializes a state variable text with an empty string ('').
    const fullText = "Hii there! I am Md. Abu Yousuf Siam from Jagannath University, Dhaka"; 
    //We’ll use this to simulate a typing animation.

    useEffect( () => {
        //Purpose: This hook runs once after the component is displayed on the screen. //Think of it like “do this after loading”.

        let index = 0; //Purpose: Keeps track of which character to add next from fullText.

        const interval = setInterval(()=>{ //This starts a repeating times, update text on every 100 milliseconds or 0.1 second
            setText((prev) => prev + fullText[index]); //It adds one new character from fullText to the existing text.
            index++;
            if(index === fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval); //This is a cleanup function.
        //It ensures the interval timer is stopped if the component unmounts.
        }, []);//useEffect function ends here on the curly brace
        //This empty array [] tells useEffect to run only once, when the component is first loaded.

    return <h1>{text}</h1>;
    //As text updates, React will re-render and show the new version.

    


} // Home function ends here