console.log("Entry mode in WebpPack");
import { addPixel, addPercentage } from "./utils/addUnitsType";

const aRandomNumber = Math.floor(Math.random() * 20);
console.log(aRandomNumber);

const aRandomNumberWithPixel = addPixel(aRandomNumber);
console.log(aRandomNumberWithPixel);

const aRandomNumberWithPercentage = addPercentage(aRandomNumber);
console.log(aRandomNumberWithPercentage);