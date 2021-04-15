async function slideBarsRight(left, right)
{
    return new Promise(resolve => {
    let blocks = document.querySelectorAll(".block");

    let style1 = window.getComputedStyle(blocks[left]);
    let style2 = window.getComputedStyle(blocks[right]);

    let transform1 = style1.getPropertyValue("transform");
    let transform2 = style2.getPropertyValue("transform");

    blocks[left].style.transform = transform2;
    // blocks[right].style.transform = transform1;
    for(let i = left+1; i<right; i++)
    {
        style2 = window.getComputedStyle(blocks[i]);;
        transform2 = style2.getPropertyValue("transform");
        blocks[i].style.transform = transform1;
        transform1 = transform2;
    }
    blocks[right].style.transform = transform1;
    blocks = document.querySelectorAll(".block");
    window.requestAnimationFrame(function() {
        setTimeout(() => {
        container.insertBefore(blocks[right], blocks[left]);

        blocks = document.querySelectorAll(".block");
          resolve();
        }, 250);
    });
    });
}