import { getSymbol } from '../Currency/Currency';


export const addCommas = (number: number): string => {
    return number.toLocaleString();
  };


  export const convertToBigNumber = (number: number, currency: string = 'usd'): string => {
    console.log("number", number);
  
    // Handle small numbers (less than 1000)
    if (number < 1000) {
      return  getSymbol(currency) + number.toString();
    }
  
    // Determine the suffix and the value to display
    const suffixes = ["", "k", "M", "B", "T"]; // Suffixes for thousands, millions, billions, etc.
    let suffixIndex = 0;
    let value = number;
  
    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
      value /= 1000;
      suffixIndex++;
    }
  
    // Format the number to 1 decimal place and add the suffix
    let formattedValue = value.toFixed(1);  // Keep one decimal place
  
    // Remove the trailing zero if the value is a whole number
    if (formattedValue.endsWith(".0")) {
      formattedValue = formattedValue.slice(0, -2);
    }
  
    // Add the suffix and return the formatted string
    const result = `${getSymbol(currency)} ${formattedValue}${suffixes[suffixIndex]}`;
    
  
    return result;
  };
  