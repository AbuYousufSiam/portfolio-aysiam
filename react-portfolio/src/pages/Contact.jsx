import Button from "../components/Button";

export default function Contact (){
    return (
        <div>
        <h2>Contact Me</h2>

        <Button label="Send Email" onClick={() => alert("Clicked")}/>
        {/* Using the Button Component */}
        <Button variant="secondary" label="Download Resume" onClick={() => window.open("resume.pdf")} />
        </div>
    );
}