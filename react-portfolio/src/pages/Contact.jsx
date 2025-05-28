import React from "react";
import Button from "../components/Button";
import { FaGithub } from 'react-icons/fa';


export default function Contact (){
    const handleSubmit = (e) => {
        e.preventDefault();
        // add your submission logic here
        console.log("Form submitted!");
        };
        
    const project = {
        name: 'My Portfolio',
        githubLink: 'https://github.com/AbuYousufSiam',
        };

    return (
        <div>
        <h2>Contact Me</h2>

        <Button label="Send Email" onClick={() => alert("Clicked")}/>
        
        <Button variant="secondary" label="Download Resume" onClick={() => window.open("resume.pdf")} /> <br/> <br/>

        {/* <Button label="Send Message" onClick={handleSubmit} variant="secondary" fullWidth />  */}

        <Button label="View GitHub" icon={FaGithub} onClick={() => window.open(project.githubLink)} variant="ghost" />

<br /> <br /> 
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
            <input
            type="text" id="name" name="name" required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email</label>
            <input type="email" id="email" name="email" required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
            </label>
            <textarea id="message" name="message" rows="4" required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
        </div>

        
            <form onSubmit={handleSubmit}>
            {/* Your form content */}
            <button type="submit">Send Message</button>
            <a href="https://github.com/AbuYousufSiam" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            </form>


        </div>
    );
}