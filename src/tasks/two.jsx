import { BackToHome } from '../App';
import React, { useState, useEffect } from 'react';

/*
  hint: the API takes page and results as query string
  eg: `?page=3&results=10`
*/

const ChallengeTwo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loadMore, setLoadMore] = useState(1);

  const getData = async () => {
    let response, data;
    setIsLoaded(true);

    if (loadMore > 1) {
      console.log('Page', loadMore);
      response = await fetch(
        `https://randomuser.me/api/?seed=dexi-interview?page=${loadMore}&results=10`
      );
      data = await response.json();

      if (response.ok) {
        let currentData;
        currentData = userData;
        data = currentData.concat(data.results);

        setUserData(data);
        setIsLoaded(false);
        return data;
      }
    }
    console.log('Page', loadMore);
    response = await fetch(
      `https://randomuser.me/api/?seed=dexi-interview?page=${loadMore}&results=10`
    );
    data = await response.json();

    if (response.ok) {
      setUserData(data.results);
      setIsLoaded(false);
      return data;
    }

    const responseError = {
      type: 'Error',
      message: response.message || 'Something went wrong',
      data: response.data || '',
      code: response.code || '',
    };

    const error = new Error();
    error.info = responseError;
    setError(error);

    return error;
  };

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
  }, [loadMore]);

  console.log(userData);

  if (isLoaded) {
    return (
      <>
        <h1>Challenge 2</h1>
        <div>Loading... </div>
        <p>Please wait while retrieve user data</p>
      </>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <BackToHome />
        <h1 className='title is-1 has-text-white'>Challenge 2</h1>
        <h2 className='subtitle has-text-grey-lighter'>
          Fetch 5 users from the api
          <code>https://randomuser.me/api/?seed=dexi-interview</code> and
          display them in a table.
        </h2>
        <h2 className='subtitle has-text-grey-lighter'>
          A <code>table-example.png</code> has been provided for guidance on
          styling.
        </h2>
        <h2 className='subtitle has-text-grey-lighter'>
          Pay close attention to empty and loading states
        </h2>
        <h2 className='subtitle has-text-grey-lighter'>
          The table should also have a <code>Load More</code> button that
          fetches the next page of the API and appends the results to the
          existing users.
        </h2>

        {/* Insert your table code here */}

        <br />

        <div>
          <table className='table-latitude'>
            <caption>Employee Information</caption>
            <thead>
              <th>NAME</th>
              <th>TITLE</th>
              <th>STATUS</th>
              <th>ROLE</th>
              <th></th>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr>
                  <th key={user.email}>
                    <img src={user.picture.thumbnail} alt='' />
                    <p>
                      {user.name.first} {user.name.last}
                    </p>
                    {user.email}
                  </th>
                  <th>{user.name.title}</th>
                  <th>ACTIVE</th>
                  <th>{user.gender}</th>
                  <th>
                    <a href='#'>Edit</a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button onClick={() => setLoadMore(loadMore + 1)}>Load more</button>
      </>
    );
  }
};

export default ChallengeTwo;
