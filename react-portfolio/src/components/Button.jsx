import React from "react";
import { cn } from '../utils/cn'; //This is optional, for using Tailwind CSS


export default function Button({variant ="primary", label, onClick, con: Icon,
  disabled = false, size = "md", fullWidth = false,
}){
    //Props (short for "properties") are the inputs to a component. 
    //variant: either "primary" or "secondary" (default is "primary")
    //label: the text to show inside the button

    const baseStyle = "rounded-xl font-semibold focus:outline-none transition duration-300";

    const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-white text-green-600 border border-green-600 hover:bg-green-50",
    ghost: "bg-transparent text-green-600 hover:bg-green-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    };    

    const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    };


    const styles = {
        primary: {
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer"
        },
        secondary: {
            backgroundColor: "#e7e7e7",
            color: "black",
            padding: "10px 20px",
            border: "1px solid #ccc",
            cursor: "pointer"
        }
    };

    return (

        <button className={cn({
                baseStyle,
                variants:[variant],
                sizes:[size],
                fullWidth
            } && "w-full",
                disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon className="inline-block mr-2" />}
            {label}
        </button>


    );
}