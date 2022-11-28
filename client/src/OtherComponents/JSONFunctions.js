export const mapJSON = (results) =>{
    let output = ""; 
    for(let i = 0; i < results.length; i++){
      let result = JSON.stringify(results[i]); 
      output += ("\n" + result ); 
    }
    return output; 
  }