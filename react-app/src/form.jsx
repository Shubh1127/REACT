import { useState } from "react";

export default function Form(){
    const[submit,setSubmit] = useState(null);
function handleFormSubmit(){
        setSubmit(alert('submitted'))
}
    return (
        <form>  
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
        <textarea name="message" required></textarea>
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;"/>
        </form>
    )
}