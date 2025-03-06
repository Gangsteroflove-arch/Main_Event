function btnSearch(){

  let msgText = "home: btnSearch" //string 
  console.log(msgText.toUpperCase());  

  //select text field and display div using document.getElementById
  const txtsearch = document.getElementById("txtsearch"); //HTMLElement or null
  const divdisplayinfo = document.getElementById("div-display-info"); //HTMLElement or null

  //validate if text field and display div is not null, if so and exit function
  if(txtsearch == null){
      msgText = "# txtsearch field not found"
      console.log(msgText)
      return false //stop onclick and exit function 
  }

  if(divdisplayinfo == null){
      msgText = "# divdisplayinfo field not found"
      console.log(msgText)
      return false //stop onclick and exit function 
  }

  //######## other if condition examples ####
  //if(txtsearch != null) -> not null 
  //if(txtsearch == null ! divdisplayinfo == null)  -> or 
  //if(txtsearch == null & divdisplayinfo == null) -> or

  //validate if text field is empty, if so exit function
  if(txtsearch.value.trim().length == 0) {
      msgText = "# please enter a valid search text"
      console.log(msgText)
      divdisplayinfo.innerText = msgText
      return false //stop onclick and exit function 
  }

  //display search text in display div
  msgText = "# searching for: " + txtsearch.value

  //divdisplayinfo.innerHTML = "<br>" + msgText + "</b>"
  divdisplayinfo.innerText = msgText;

  txtsearch.value = ""; //clear text field
  txtsearch.focus(); //move keyboard cursor to text field

  function lnkClear(){
    
    let msgText = "home: lnkClear"
    console.log(msgText.toUpperCase());

    //select text field and display div using document.getElementById
    
    //const txtsearch = document.getElementById("txtSearch"); //HTMLElement or null
    const txtsearch = document.getElementById("txtsearch");  //HTMLElement or null
    const divdisplayinfo = document.getElementById("div-display-info");  //HTMLElement or null
    
    //validate if text field and display div is null, if so and exit function
    //-- undefined = field was not definded or created
    //-- null - field was defined and does not have a value 
    //-- undefined variable is a variable that was not ceeated
    
    //const var1; //null variable - defined but does not have any value 
    
    //if(txtsearch == null | txtsearch1 == undefined) {
    if(txtsearch == null | txtsearch == undefined) {
        msgText = "# txtsearch is null"
        return false;
    }

    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //set keyboard focus to the text field
    
    //divdisplayinfo.innerText =
}
