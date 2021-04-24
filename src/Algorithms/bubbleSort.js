async function bubbleSort() {
    let blocks = document.querySelectorAll(".block");
    for (let i = 0; i < blocks.length - 1; i += 1) {
      for (let j = 0; j < blocks.length - i - 1; j += 1) {
        blocks[j].style.backgroundColor = "#FF4949";
        blocks[j + 1].style.backgroundColor = "#FF4949";
  
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
  
        const value1 = parseInt(blocks[j].style.height);
        const value2 = parseInt(blocks[j + 1].style.height);
        // console.log(value1);
        // console.log(value2);
  
        if (value1 > value2) {
          await swapInd(j, j + 1);
          blocks = document.querySelectorAll(".block");
          // console.log('inside');
          // console.log(value1);
        }
  
        blocks[j].style.backgroundColor = "#58B7FF";
        blocks[j + 1].style.backgroundColor = "#58B7FF";
        // blocks = document.querySelectorAll(".block");
      }
  
      blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
      // blocks = document.querySelectorAll(".block");
    }
    blocks[0].style.backgroundColor = "#13C366";
    blocks = document.querySelectorAll(".block");
  }

