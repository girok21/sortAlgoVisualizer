async function quickSort() {
  disableSensitiveButton();
    let blocks = document.querySelectorAll(".block");
    let end = blocks.length-1;
    await funquickSort(0,end);
    for(let i = 0; i<=end; i++)
        blocks[i].style.backgroundColor = "#13CE66";
        await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    enalbeSensitiveButton();
}

async function partition(low, high)
{
    let blocks = document.querySelectorAll(".block");
    let pivot = parseInt(blocks[high].style.height); // pivot
    //will highlight the pivot value
    blocks[high].style.backgroundColor = "#FF4949";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
    for (let j = low; j <= high - 1; j++)
    {
        if (parseInt(blocks[j].style.height) < pivot)
        {
            i++; // increment index of smaller element
            await swapInd(i,j);
        }
    }
    await swapInd(i+1,high);
    blocks = document.querySelectorAll(".block");
    blocks[i+1].style.backgroundColor = "#13CE66";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    return (i + 1);
}

async function funquickSort(low, high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[p] is now
        at right place */
        let pi = await partition(low, high);
 
        // Separately sort elements before
        // partition and after partition
        await funquickSort(low, pi - 1);
        await funquickSort(pi + 1, high);
    }
}
