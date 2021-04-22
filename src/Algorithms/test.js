async function test()
{
    let blocks = document.querySelectorAll(".block");
    await slideBarsRight(ind,ind2);
    blocks = document.querySelectorAll(".block");
    ind2 +=1;
    // dispHeight(blocks);
    // console.log(blocks.style.height);
    // await slideBarsRight(ind, ind2 + 1);
}

function dispHeight()
{
    let blocks = document.querySelectorAll(".block");
    let len = blocks.length;
    for(let i=0; i<len; i++)
    {
        console.log(blocks[i].style.height);
    }
    console.log("___________________________________");
}