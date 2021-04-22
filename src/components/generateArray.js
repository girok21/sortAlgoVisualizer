function generateBlocks() {
    // const container = document.querySelector(".data-container");
    removeAllChildNodes(container);
    // var size = document.getElementById("myRange").value;
    array.length = 0;
    if (size && typeof size !== "number") {
      alert("Array size must be a typeof number");
      return;
    }
    for (let i = 0; i < size; i += 1) {
      let value = Math.floor(Math.random() * 100);
      value+=1;
      array.push(value);
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.height = `${value * 3}px`;
      block.style.transform = `translateX(${i * 30}px)`;
  
      // const blockLabel = document.createElement("label");
      // blockLabel.classList.add("block__id");
      // blockLabel.innerHTML = value;
  
      // block.appendChild(blockLabel);
      container.appendChild(block);
    }
    // console.log(container.children);
    // return container;
    // console.log(array);
    dispHeight();
  }

  function removeAllChildNodes(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
  }