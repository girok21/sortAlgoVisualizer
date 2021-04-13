async function swapInd(left, right)
{
    return new Promise(resolve => {
    // left++;
    let blocks = document.querySelectorAll(".block");

    // let right = left+1;
    const style1 = window.getComputedStyle(blocks[left]);
    const style2 = window.getComputedStyle(blocks[right]);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    blocks[left].style.transform = transform2;
    blocks[right].style.transform = transform1;

    window.requestAnimationFrame(function() {
        setTimeout(() => {
        const siblingA = blocks[left].nextSibling === blocks[right] ? blocks[left] : blocks[left].nextSibling;

        // Move `nodeA` to before the `nodeB`
        container.insertBefore(blocks[left], blocks[right]);
    
        // Move `nodeB` to before the sibling of `nodeA`
        container.insertBefore(blocks[right], siblingA);
        blocks = document.querySelectorAll(".block");
          resolve();
        }, 250);
    });
    });
}

// function swap(el1, el2) {
//   console.log(parseInt(el1.style.height)/3);
//   console.log(parseInt(el2.style.height)/3);
//     return new Promise((resolve) => {
//       const style1 = window.getComputedStyle(el1);
//       const style2 = window.getComputedStyle(el2);
  
//       const transform1 = style1.getPropertyValue("transform");
//       const transform2 = style2.getPropertyValue("transform");
//       el1.style.transform = transform2;
//       el2.style.transform = transform1;
//       let temp = el1.nextElementSibling; 
//       // Wait for the transition to end!
//       window.requestAnimationFrame(function () {
//         if(temp === el2)
//         {
//           setTimeout(() => {
//             container.insertBefore(el2, el1);
//             resolve();
//           }, 250);
//           return;
//         }
//         else
//         {
//           swap(temp, el1);
//         }
//       });
//     });
//     return;
//   }

//   function insertAfter(newNode, referenceNode) {
//     container.insertBefore(newNode, referenceNode.nextSibling);
//   }

  // function swap(el1, el2, delay = 250) {
  //   return new Promise(resolve => {
  //     const style1 = window.getComputedStyle(el1);
  //     const style2 = window.getComputedStyle(el2);
  
  //     const transform1 = style1.getPropertyValue("transform");
  //     const transform2 = style2.getPropertyValue("transform");
  
  //     el1.style.transform = transform2;
  //     el2.style.transform = transform1;
  
  //     // Wait for the transition to end!
  //     window.requestAnimationFrame(function() {
  //       setTimeout(() => {
  //         container.insertBefore(el2, el1);
  //         resolve();
  //       }, delay);
  //     });
  //   });
  // }