async function slideBarsRight(left, right)
{
    return new Promise(resolve => {
    let blocks = document.querySelectorAll(".block");

    // let style1 = window.getComputedStyle(blocks[left]);
    let leftstyle = window.getComputedStyle(blocks[left]);//store for now 

    // let transform1 = style1.getPropertyValue("transform");
    let lefttransform = leftstyle.getPropertyValue("transform");//store for now 

    for(let i = right-1; i>=left; i--)
    {
        let style1 = window.getComputedStyle(blocks[i+1]);
        // let style2 = window.getComputedStyle(blocks[i+1]);
        let transform1 = style1.getPropertyValue("transform");
        // let transform2 = style2.getPropertyValue("transform");
        blocks[i].style.transform = transform1;
    }
    blocks[right].style.transform = lefttransform;
    window.requestAnimationFrame(function() {
        setTimeout(() => {
        container.insertBefore(blocks[right], blocks[left]);

        blocks = document.querySelectorAll(".block");
          resolve();
        }, delay);
    });
    });
}