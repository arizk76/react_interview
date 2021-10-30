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
  let uniqueHeaderArray = [];
  let sortedArray = [[]];
  let headerIndex = 0;

  //  Create header array with unique values without duplicates

  function createHeaderArray(...arrays) {
    let jointArray = [];

    arrays.forEach((array) => {
      jointArray = [...jointArray, ...array[0]];
    });
    uniqueHeaderArray = jointArray.reduce((newArray, item) => {
      if (newArray.includes(item)) {
        return newArray;
      } else {
        return [...newArray, item];
      }
    }, []);
    return uniqueHeaderArray;
  }
  createHeaderArray(...arrays);
  // console.log(uniqueHeaderArray);

  // retrieve header index equal to  Col number in final merged array

  function getHeaderIndex(headerName) {
    uniqueHeaderArray.forEach((header) => {
      if (header === headerName) {
        headerIndex = uniqueHeaderArray.indexOf(header);
      }
      return headerIndex;
    });
  }

  // getHeaderIndex(array5[0][1]);

  // console.log(headerIndex);

  // sort each array by user id col and fill gaps if missing

  function newSortedArr(array) {
    let emptyArray = [[]];
    let header = [];
    header = array[0];
    // console.log(header);

    // array.splice(0, 1);
    sortedArray = array.sort((a, b) => {
      return a[1] - b[1];
    });

    if (sortedArray.length < 6) {
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

  // Get col from array to merge each col separately into final array
  function getCol(array, col) {
    var column = [];
    for (var i = 0; i < array.length; i++) {
      column.push(array[i][col]);
    }
    return column;
  }

  //  var array = [new Array(20), new Array(20), new Array(20)]; //..your 3x20 array

  newSortedArr(array3);

  // console.log(sortedArray);
  // console.log(getCol(sortedArray, 0)); //Get first column
}

createNewArray(array1, array2, array3, array4, array5);

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
    </>
  );
};

export default ChallengeOne;
