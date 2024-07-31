import React, { useState } from 'react';
import './main.css'
import Button from './Button';
export default function Main() {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };
const uppercase = () => {
    setInput(input.toUpperCase());
}
const lowercase = () => {
    setInput(input.toLowerCase());
}
const clear = () => {
    setInput("");
}

const copy = () => {
    navigator.clipboard.writeText(input);
}
const spaceremove = () => {
    setInput(input.replace(/\s+/g, ' ').trim());
}
const paste = () => {
    navigator.clipboard.readText()
    .then(text => {
        setInput(text);
    })
}
const capitalize = () => {
    // Split the input into words, capitalize each word, and join them back into a string
    const capitalizedText = input
        .split(' ') // Split the input string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join the array of words back into a single string

    // Update the state with the capitalized text
    setInput(capitalizedText);
};
    return (
        <>
           <div className='d-flex flex-column gap-2 w-100 bg-dark '>
            <textarea name="" id="" value={input} onChange={handleChange}className='bg-dark text-light w-100 border-3 my-5'></textarea><br />

        <Button onClick={uppercase} name='uppercase'/>
        <Button onClick={lowercase} name='lowercase'/>
        <Button onClick={clear} name='clear'/>
        <Button onClick={copy} name='copy'/>
        <Button onClick={spaceremove} name='spaceremove'/>
        <Button onClick={paste} name='paste'/>
        <Button onClick={capitalize} name='Capitalize'/>

        </div>
        </>
    );
}


