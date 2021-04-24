async function mergeSort()
{
    let blocks = document.querySelectorAll(".block");
    let r = blocks.length-1;
    await funMergeSort(0, r);
    for(let i = 0; i<=r; i++)
        blocks[i].style.backgroundColor = "#13CE66";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
}

async function funMergeSort(l,r)
{
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

async function merge(l,m,r)
{
    let blocks = document.querySelectorAll(".block"); 
    let start2 = m+1;//first index of the second half of the array
    let ht1 = parseInt(blocks[m].style.height);
    let ht2 = parseInt(blocks[start2].style.height);
    if (ht1 <= ht2) {
            await highlight(l,r,"#13C366");
            return;
    }
    let start1 = l;
    while(start1<=r && start2<=r)
    {
        ht1 = parseInt(blocks[start1].style.height);
        ht2 = parseInt(blocks[start2].style.height);
        if(ht2 <= ht1)
        {
            await slideBarsRight(start1,start2);
            blocks = document.querySelectorAll(".block");
            start2++;
        }
        start1++;
    }
    await highlight(l,r,"#13C366");
}

async function highlight(l,r,colorcode)
{
    
    let blocks = document.querySelectorAll(".block");
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
    }, delay)
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
