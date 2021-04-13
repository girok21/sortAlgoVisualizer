async function selectionSort(delay = 250){

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
          // console.log(value1);
          // console.log(value2);
    
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
      // for(let k = maxindex; k<blocks.length-1-i; k++){
      // await swap(blocks[k], blocks[k+1]);
      // blocks = document.querySelectorAll(".block");
      // }
      // for(k=blocks.length-i-1-1; k>maxindex; k--)
      // {
      //   await swap(blocks[k-1], blocks[k]);
      //   blocks = document.querySelectorAll(".block");
      // }
      await swapInd(maxindex, blocks.length-i-1);
      blocks = document.querySelectorAll(".block");
      blocks[blocks.length-1-i].style.backgroundColor = "#13CE66";
      blocks = document.querySelectorAll(".block");
    //   await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, delay)
    // );
  }
  // for (let i = 0; i < blocks.length; i += 1) {
  //     blocks[blocks.length - i].style.backgroundColor = "#13CE66";
  //     await new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve();
  //     }, 100)
  //   );
  // }
}

