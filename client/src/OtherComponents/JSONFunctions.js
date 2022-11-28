export const mapJSON = (results) =>{
    let output = ""; 
    console.log("Attemping to map.")
    if(typeof results != 'undefined'){
      for(let i = 0; i < results.length; i++){
        let result = JSON.stringify(results[i]); 
        output += ("\n" + result ); 
      }
    }
    return output; 
  }