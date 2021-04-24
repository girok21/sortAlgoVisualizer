function updateTransSpeed(val)
{
    val = 620 - val;
    delay = val;
    let blocks = document.querySelectorAll(".block");
    for(let i = 0; i<blocks.length; i++)
    {
        blocks[i].style.transition = `${val/1000}s all ease`;
    }
    blocks = document.querySelectorAll(".block");
}