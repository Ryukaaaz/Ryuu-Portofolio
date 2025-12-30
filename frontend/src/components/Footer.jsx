import { Linkedin } from "lucide-react";

export const Footer = () =>{
    return (
        <footer>
            {" "}
            <div> 
                <div className="pt-3">
                    <p> &copy; {new Date().getFullYear()}</p>   
                </div>
               
            </div>
        </footer>
    );
};