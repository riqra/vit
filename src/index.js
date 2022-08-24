import reportWebVitals from './reportWebVitals';
import vit from "./vit";

window.__VIT__ = vit;
window.vit = vit; //this is supported until 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
