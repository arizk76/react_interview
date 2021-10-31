import { BackToHome } from '../App';

const array1 = [
  ['name', 'id', 'age', 'weight', 'job'],
  ['Mohammed', '3', '20', '120', 'developer'],
  ['John', '1', '21', '150', 'designer'],
  ['Ali', '2', '23', '90', 'doctor'],
  ['Mariam', '4', '20', '100', 'lawyer'],
];

const array2 = [
  ['name', 'id', 'height'],
  ['Ali', '2', '50'],
  ['John', '1', '45'],
  ['Mariam', '4', '43'],
  ['Mohammed', '3', '48'],
  ['Tony', '5', '96'],
];

const array3 = [
  ['name', 'id', 'parent'],
  ['Ali', '2', 'yes'],
  ['John', '1', 'yes'],
  ['Tony', '5', 'yes'],
];

const array4 = [
  ['name', 'id', 'hobby'],
  ['Mariam', '4', 'video games'],
  ['Ali', '2', 'kickboxing'],
  ['Tony', '5', 'football'],
];

const array5 = [
  ['id', 'status'],
  ['1', 'active'],
  ['2', 'inactive'],
  ['3', 'active'],
  ['4', 'active'],
  ['5', 'active'],
];

/*
  Combine the arrays into one table.
  You may find console.table()
  useful for monitoring your progress
  You may not install any external libraries.
*/
function createNewArray(...arrays) {
  // Initialize global variables
  const uniqueHeaderArray = [];
  let sortedArray = [[]];
  let result = [[]];
  const arraysLength = [];
  let maxArraysLength = 0;

  //  Create header array with unique values without duplicates
  let jointHeader = [];

  arrays.forEach((array) => {
    jointHeader = [...jointHeader, ...array[0]];
    return jointHeader;
  });

  jointHeader.forEach((item) => {
    if (!uniqueHeaderArray.includes(item)) {
      uniqueHeaderArray.push(item);
    }
  });

  // console.table(uniqueHeaderArray);
  // Output should be ['name', 'id', 'age', 'weight', 'job', 'height', 'parent', 'hobby', 'status']

  arrays.forEach((array) => {
    arraysLength.push(array.length);
  });

  maxArraysLength = Math.max(...arraysLength);

  // Generate empty array 5 X 9 for final result
  result = new Array(maxArraysLength)
    .fill()
    .map(() => new Array(uniqueHeaderArray.length));

  result[0] = uniqueHeaderArray;

  // Helper function to sort each array by user id and fill empty gaps

  function newSortedArr(array) {
    let emptyArray = [[]];
    let header = [];
    header = array[0];
    // console.log(header);

    // array.splice(0, 1);
    sortedArray = array.sort((a, b) => {
      return a[1] - b[1];
    });

    if (sortedArray.length < maxArraysLength) {
      for (let i = 1; i < sortedArray.length; i++) {
        let row = sortedArray[i];

        let id = row[1];

        emptyArray[id] = row;
        emptyArray[0] = header;
      }

      for (let i = 0; i <= 5; i++) {
        if (!emptyArray[i]) {
          emptyArray[i] = [];
        }
      }
      sortedArray = emptyArray;
    }
    // console.table(sortedArray);
  }
  // Helper function to GET each col from sorted array
  // To insert col data separately into final result array

  function getCol(array, col) {
    var column = [];
    for (var i = 0; i < array.length; i++) {
      column.push(array[i][col]);
    }
    return column;
  }
  // Generate final array and assign it to result
  arrays.forEach((array) => {
    // First sort each array
    newSortedArr(array);

    for (let i = 0; i <= sortedArray[0].length; i++) {
      let insertedCol = [];
      // Get each Col after sort
      insertedCol = getCol(sortedArray, i);

      for (let j = 1; j < insertedCol.length; j++) {
        // inject col data to it's corresponding location if empty only
        if (!result[j][uniqueHeaderArray.indexOf(insertedCol[0])]) {
          result[j][uniqueHeaderArray.indexOf(insertedCol[0])] = insertedCol[j];
        }
      }
    }
  });

  return result;
}

console.table(createNewArray(array1, array2, array3, array4, array5));

const ChallengeOne = () => {
  return (
    <>
      <BackToHome />
      <h1 className='title is-1 has-text-white'>Challenge 1</h1>
      <h2 className='subtitle has-text-grey-lighter'>
        Inside <code>/tasks/one.js</code> you will find a set of arrays. Merge
        them into one array. Headers are in the first row and data is right
        under.
        <span style={{ color: 'red' }}> (Like Database Joins)</span>
      </h2>
      <h2 className='subtitle has-text-grey-lighter'>
        You may not install any additional libraries.
      </h2>
      <div style={{ color: 'red' }}>
        <h1>Please check console.log for final result of</h1>
        <h2>createNewArray(array1, array2, array3, array4, array5)</h2>
      </div>
    </>
  );
};

export default ChallengeOne;
