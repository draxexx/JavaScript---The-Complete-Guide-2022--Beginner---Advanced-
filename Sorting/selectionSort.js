let unordered = [25, 15, 7, 12, 7, 2, 18];

const selectionSort = (array) => {
  let minIndex = 0;

  console.log(array);

  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  console.log(array);
};

// selectionSort(unordered);
