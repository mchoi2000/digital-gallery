import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/mchoi2000/9dc3f9edc4713e6e9a3dc15fe99114f4/raw/MissingMigrants-Global-2021-03-13-subset.csv';

const row = d => {
	d.coords = d['Location Coordinates'].split(',').map(d => +d).reverse();
  d['Total Dead and Missing'] = +d['Total Dead and Missing'];
  d['Reported Date'] = new Date(d['Reported Date']);
  return d;
}

export const useData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);
  
	return data;
}