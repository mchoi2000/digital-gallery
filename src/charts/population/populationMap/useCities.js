import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/mchoi2000/e5e0486c74abdbb624db43d7f0783255/raw/worldcities-20210313-population-50000+.csv';

const row = d => {
  d.lat = +d.lat;
  d.lng = +d.lng;
  d.population = +d.population;
  return d;
}

export const useCities = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);
  
	return data;
}