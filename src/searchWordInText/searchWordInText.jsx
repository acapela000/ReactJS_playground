import React, { useEffect, useState } from "react";


export default function SearchWordInText() {

    const [inputWord, setInputWord] = useState("");
    const [url, setURL] = useState("");
    const [result, setResult] = useState(0);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network is not ok")
                } else res.text();
            })
            .then((text) => {
               const wordCount = text.split(inputWord).length -1;
                    setResult(wordCount);
            })
            .catch((error) => {
                console.error("Fetching is error", error);
                setResult(0);
            });
    }, [inputWord, url]);

    return (
        <div>
            <input type="text" value={inputWord} placeholder="Input a word U wanna search in the website"
                onChange={(e) => setInputWord(e.target.value)} />
            <input type="text" value={url} placeholder="Enter a url of website"
                onChange={(e) => setURL(e.target.value)} />

            {result > 0 ? (
                <p>The {inputWord} appears {result} times </p>
            ) : (
                <p>The {inputWord} doesn't appear in the website </p>
            )}
        </div>
    );
};