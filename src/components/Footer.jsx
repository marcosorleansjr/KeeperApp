import React from "react";

function Footer(){
 const date = new Date();
 const yearNow = date.getFullYear();
    

 return   (<footer><p>Marcos Junior {yearNow}</p></footer>);
}

export default Footer;