async function insertionSort(delay = 250) {
    let blocks = document.querySelectorAll(".block");
    // blocks[0].style.backgroundColor = "#13CE66";
    for (let i = 0; i < blocks.length; i++) {
        let keyindex = i;
        blocks[i].style.backgroundColor = "#FF4949";
        blocks = document.querySelectorAll(".block");
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    //   console.log(value1);
    //   console.log(value2); 
    if(keyindex > 0)
    {
        value1 = parseInt(blocks[keyindex].style.height);
        value2 = parseInt(blocks[keyindex - 1].style.height);
    } 
      // console.log(value1/3);
      // console.log(value2/3); 

      while(keyindex>0 && value1<value2)
      {  
   
        await swapInd(keyindex-1, keyindex);

        blocks = document.querySelectorAll(".block");
        keyindex--;
        if(keyindex > 0)
        {
            value1 = parseInt(blocks[keyindex].style.height);
            value2 = parseInt(blocks[keyindex - 1].style.height);
        }        
      }
      // keyindex++;

      blocks[keyindex].style.backgroundColor = "#13CE66";
      blocks = document.querySelectorAll(".block");
    }
  }
