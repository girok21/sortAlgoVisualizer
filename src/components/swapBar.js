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
        }, delay);
    });
    });
}

