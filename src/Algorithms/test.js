async function test()
{
    let blocks = document.querySelectorAll(".block");
    await slideBarsRight(ind,ind2);
    blocks = document.querySelectorAll(".block");
    ind2 +=1;
    console.log(blocks.style.height);
    // await slideBarsRight(ind, ind2 + 1);
}