 import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
console.log("hello")

function GithubProfile(){
return(
    <>
    <Header></Header>
    <Body></Body>
    </>
)
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile></GithubProfile>);