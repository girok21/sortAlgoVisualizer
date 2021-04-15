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
    console.log(m);
    await funMergeSort(l,m);
    await funMergeSort(m+1,r);
    

}

// void merge(int arr[], int l, int m, int r)
// {
//     int n1 = m - l + 1;
//     int n2 = r - m;
 
//     // Create temp arrays
//     int L[n1], R[n2];
 
//     // Copy data to temp arrays L[] and R[]
//     for (int i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (int j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
 
//     // Merge the temp arrays back into arr[l..r]
 
//     // Initial index of first subarray
//     int i = 0;
 
//     // Initial index of second subarray
//     int j = 0;
 
//     // Initial index of merged subarray
//     int k = l;
 
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }
 
//     // Copy the remaining elements of
//     // L[], if there are any
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
 
//     // Copy the remaining elements of
//     // R[], if there are any
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// async function merge()
// {

// }
async function highlight(l,r,colorcode,delay = 250)
{
    let blocks = document.querySelectorAll(".block");
    // let delay = 250;
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

// function mergeSort()
// {
//     let blocks = document.querySelectorAll(".block");
//     // for (let i = 0; i < blocks.length - 1; i += 1) {
//     //   for (let j = 0; j < blocks.length - i - 1; j += 1) {
//     //     blocks[j].style.backgroundColor = "#FF4949";
//     //     blocks[j + 1].style.backgroundColor = "#FF4949";
  
//     //     await new Promise((resolve) =>
//     //       setTimeout(() => {
//     //         resolve();
//     //       }, delay)
//     //     );
  
//     //     const value1 = parseInt(blocks[j].style.height);
//     //     const value2 = parseInt(blocks[j + 1].style.height);
//     //     // console.log(value1);
//     //     // console.log(value2);
  
//     //     if (value1 > value2) {
//     //       await swapInd(j, j + 1);
//     //       blocks = document.querySelectorAll(".block");
//     //       // console.log('inside');
//     //       // console.log(value1);
//     //     }
  
//     //     blocks[j].style.backgroundColor = "#58B7FF";
//     //     blocks[j + 1].style.backgroundColor = "#58B7FF";
//     //     // blocks = document.querySelectorAll(".block");
//     //   }
  
//     //   blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
//     //   // blocks = document.querySelectorAll(".block");
//     // }
//     // blocks[0].style.backgroundColor = "#13C366";
//     // blocks = document.querySelectorAll(".block");
//     let r = blocks.length/2;
//     highlight(0, r);
// }

// function highlight(l, r)
// {
//   let blocks = document.querySelectorAll(".block");
//   for(let i=l; i<=r; i++)
//   {
//     blocks[j].style.backgroundColor = "#f2eb6b";
//   }
//   blocks = document.querySelectorAll(".block");
//   await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve();
//     }, delay)
//   );
//   let blocks = document.querySelectorAll(".block");
//   for(let i=l; i<=r; i++)
//   {
//     blocks[j].style.backgroundColor = "#58B7FF";
//   }
//   blocks = document.querySelectorAll(".block");
// }