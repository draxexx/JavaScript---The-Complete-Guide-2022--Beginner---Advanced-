let unorderedBubbleSort = [25, 15, 7, 12, 7, 2, 18];

const bubbleSort = (array) => {
  console.log(array);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
};

bubbleSort(unorderedBubbleSort);
