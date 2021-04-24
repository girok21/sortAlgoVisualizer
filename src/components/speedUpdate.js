function updateTransSpeed(val)
{
    val = 617 - val;
    delay = val;
    updatBarSpeed();
}

function updatBarSpeed()
{
    let blocks = document.querySelectorAll(".block");
    for(let i = 0; i<blocks.length; i++)
    {
        blocks[i].style.transition = `${delay/1000}s all ease`;
    }
    blocks = document.querySelectorAll(".block");
}