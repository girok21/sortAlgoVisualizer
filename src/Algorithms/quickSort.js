async function quickSort() {
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
    // if(i>=low && i<=high)
    // {
    //     blocks[i].style.backgroundColor = "orange";
    // }
    for (let j = low; j <= high - 1; j++)
    {
        // If current element is smaller than the pivot
        // blocks[j].style.backgroundColor = "yellow";
        // await new Promise((resolve) =>
        //   setTimeout(() => {
        //     resolve();
        //   }, delay)
        // );
        if (parseInt(blocks[j].style.height) < pivot)
        {
            // if(i>=low && i<=high)
            // {
            //     blocks[i].style.backgroundColor = "#58B7FF";
            // }
            // await new Promise((resolve) =>
            //   setTimeout(() => {
            //     resolve();
            //   }, delay)
            // );
            // blocks[j].style.backgroundColor = "#58B7FF";
            // await new Promise((resolve) =>
            //   setTimeout(() => {
            //     resolve();
            //   }, delay)
            // );
            i++; // increment index of smaller element
            await swapInd(i,j);
            // blocks[i].style.backgroundColor = "orange";
            // await new Promise((resolve) =>
            //   setTimeout(() => {
            //     resolve();
            //   }, delay)
            // );
        }
        // else
        // {
        //     blocks[j].style.backgroundColor = "#58B7FF";
        //     await new Promise((resolve) =>
        //       setTimeout(() => {
        //         resolve();
        //       }, delay)
        //     );
        // }
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
// async function funquickSort(start, end){
//     let pivotValue = blocks[end].height;
//     let pivotIndex = end;

// }