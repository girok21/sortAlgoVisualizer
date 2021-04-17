async function mergeSort()
{
    let blocks = document.querySelectorAll(".block");
    let r = blocks.length-1;
    await funMergeSort(0, r);
}

async function funMergeSort(l,r, delay = 250)
{
    // let blocks = document.querySelectorAll(".block");
    if(l>=r)
    {    
        if(l==r)
            await highlight(l,r,"#f2eb6b");
        return;
    }
    
    let m = l + Math.floor((r-l)/2);
    await highlight(l,r,"#f2eb6b");
    // console.log(m);
    await funMergeSort(l,m);
    await funMergeSort(m+1,r);
    await merge(l,m,r);
}

async function merge(l,m,r,delay = 250)
{
    let blocks = document.querySelectorAll(".block");
    // if(blocks[m].style.height <= blocks[m+1].style.height)
    // {
    //     await highlight(l,r,"#13C366");
    //     return;
    // }  
    let start2 = m+1;//first index of the second half of the array
    await highlight(l,r,"orange");
    let ht1 = parseInt(blocks[m].style.height);
    let ht2 = parseInt(blocks[start2].style.height);
    if (ht1 <= ht2) {
            await highlight(l,r,"#13C366");
            return;
    }
    let start1 = l;
    while(start1<=m && start2<=r)
    {
        ht1 = parseInt(blocks[start1].style.height);
        ht2 = parseInt(blocks[start2].style.height);
        if(ht2 <= ht1)
        {
            // blocks[start1].style.backgroundColor = "#FF4949";
            // blocks[start2].style.backgroundColor = "#FF4949"; 
            // blocks = document.querySelectorAll(".block");     
            // await new Promise((resolve) =>
            //   setTimeout(() => {
            //     resolve();
            //   }, delay)
            // );
            await slideBarsRight(start1,start2);
            blocks = document.querySelectorAll(".block");
            // blocks[start1].style.backgroundColor = "#58B7FF";
            // blocks[start2].style.backgroundColor = "#58B7FF";  
            blocks = document.querySelectorAll(".block");
            start2++;
        }
        start1++;
    }
    await highlight(l,r,"#13C366");
}

async function highlight(l,r,colorcode,delay = 250)
{
    
    let blocks = document.querySelectorAll(".block");
    // let delay = 250;
    if(r-l == blocks.length-1 && colorcode!="purple")
        return;
    for(let i=l; i<=r; i++)
    {
        blocks[i].style.backgroundColor = colorcode;
    }
    blocks = document.querySelectorAll(".block");
    await new Promise((resolve) =>
    setTimeout(() => {
    resolve();
    }, delay*(1.5))
    );
    for(let i=l; i<=r; i++)
    {
        blocks[i].style.backgroundColor = "#58B7FF";
    }
    blocks = document.querySelectorAll(".block");
    await new Promise((resolve) =>
    setTimeout(() => {
    resolve();
    }, delay)
    );
}
