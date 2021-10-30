import { BackToHome } from '../App';
import React, { useState, useEffect } from 'react';
import AgePieChart from '../Components/AgePieChart';
import GenderPieChart from '../Components/GenderPieChart';
import CountryBarChart from '../Components/CountryBarChart';
import GeoLocationMap from '../Components/GeoLocationMap';
import RegDateChart from '../Components/RegDateChart';
import { ChartPie } from 'heroicons-react';

/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas
  than the ones required below.
*/

const ChallengeThree = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    let response, data;

    response = await fetch(
      `https://randomuser.me/api/?seed=dexi-interview?page=1&results=100`
    );
    data = await response.json();

    if (response.ok) {
      setUserData(data.results);

      return data;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(userData);

  // Genrate ages array to present it with pie chart
  let ages = [];
  ages = userData.map((user) => user.dob.age);
  let agesChart = {
    below35: 0,
    below49: 0,
    below55: 0,
    below60: 0,
    below65: 0,
    above65: 0,
  };
  ages.forEach((age) => {
    if (age < 35) {
      agesChart.below35++;
    } else if (age > 35 && age < 49) {
      agesChart.below49++;
    } else if (age > 49 && age < 55) {
      agesChart.below55++;
    } else if (age > 55 && age < 60) {
      agesChart.below60++;
    } else if (age < 65) {
      agesChart.below65++;
    } else {
      agesChart.above65++;
    }
  });

  // Display by country

  ////////////////////////////////////////

  let countryList = new Set(userData.map((user) => user.location.country));
  let byCountryChart = [];
  let coordinates = [];
  coordinates = userData.map((user) => user.location.coordinates);

  // console.log(coordinates);

  for (let country of countryList) {
    let name = '';
    let count = 0;

    userData.map((user) => {
      if (user.location.country === country) {
        name = user.location.country;
        count = count + 1;
      }
      return count;
    });
    byCountryChart.push({
      countryName: name,
      numberOfUsers: count,
    });
  }
  // console.log(byCountryChart);

  ////////////////////////////////////////////

  // console.log(agesChart);

  // Generate gender array
  // console.log(userData);

  let genderChart = {
    male: 0,
    female: 0,
  };
  userData.forEach((user) => {
    if (user.gender === 'male') {
      genderChart.male++;
    } else if (user.gender === 'female') {
      genderChart.female++;
    }
  });

  ///////////////////////
  // By Registration date

  let regDateList = {};
  let byRegDate = {
    below1950: 0,
    below1960: 0,
    below1970: 0,
    below1980: 0,
    below1990: 0,
    above1990: 0,
  };
  regDateList = userData.map((user) => user.dob.date.substring(0, 4));

  let yearToNumber = regDateList.map((i) => Number(i));
  regDateList.forEach((date) => {
    if (date < 1950) {
      byRegDate.below1950++;
    } else if (`${date}` >= 1950 && date < 1960) {
      byRegDate.below1960++;
    } else if (date >= 1960 && date < 1970) {
      byRegDate.below1970++;
    } else if (date >= 1970 && date < 1980) {
      byRegDate.below1980++;
    } else if (date >= 1980 && date < 1990) {
      byRegDate.below1990++;
    } else byRegDate.above1990++;
  });
  // console.log(yearToNumber);
  // console.log(byRegDate);

  return (
    <>
      <BackToHome />

      <h1 className='title is-1 has-text-white'>Challenge 3</h1>
      <h2 className='subtitle has-text-grey-lighter'>
        Fetch 100 users from the same api as before, andvisualize their
        distribution by <code>age</code>, <code>gender</code>,
        <code>country</code>, and <code>registration date</code>.
      </h2>
      <h3>
        Use <code>Charts </code>to Visualize your Data
      </h3>
      {/* Insert your data visualizations here */}
      <div className='chart-data'>
        <div>
          <AgePieChart data={agesChart} />
          <h4 style={{ padding: 10 }}>By Age Group</h4>
        </div>
        <br />
        <div>
          <GenderPieChart data={genderChart} />
          <h4 style={{ padding: 10 }}>By Gender</h4>
        </div>
      </div>
      <div className='chart-data'>
        <div style={{ width: '50%' }}>
          <RegDateChart data={byRegDate} />
        </div>
        <div>
          <ChartPie fontSize={150} />
          <h2>By registration year</h2>

          <p>Displaying data for all users by registration year</p>
        </div>
      </div>

      <br />
      <div className='chart-data' style={{ flexDirection: 'column' }}>
        <div style={{ width: '80%' }}>
          <CountryBarChart data={byCountryChart} />
          <h4 style={{ padding: 10 }}>By Country</h4>
        </div>
        <br />
        <div style={{ width: '90%', border: '0.5px solid' }}>
          <GeoLocationMap data={coordinates} />
        </div>
        <h4 style={{ padding: 10 }}>By Geo Location</h4>
        <br />
      </div>
    </>
  );
};

export default ChallengeThree;
