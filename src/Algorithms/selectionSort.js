async function selectionSort(){
  disableSensitiveButton();
    let blocks = document.querySelectorAll(".block");
    for (let i = 0; i < blocks.length; i += 1) {
      let temp = 0;
      let maxindex = 0;
      blocks[maxindex].style.backgroundColor = "purple";
      for (let j = 1; j < blocks.length - i; j += 1) {

          blocks[j].style.backgroundColor = "#FF4949"; 
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
           
          const value1 = parseInt(blocks[j].style.height);
          const value2 = parseInt(blocks[maxindex].style.height);
    
          if (value1 > value2) {
            temp = maxindex;
            maxindex = j;
            blocks[maxindex].style.backgroundColor = "purple";  
            blocks[temp].style.backgroundColor = "#58B7FF";
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
          }
          if(maxindex != j)
            blocks[j].style.backgroundColor = "#58B7FF";
      }

      await swapInd(maxindex, blocks.length-i-1);
      blocks = document.querySelectorAll(".block");
      blocks[blocks.length-1-i].style.backgroundColor = "#13CE66";
      blocks = document.querySelectorAll(".block");

  }
  enalbeSensitiveButton();
}

