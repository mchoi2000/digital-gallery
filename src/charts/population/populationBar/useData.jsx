import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
'https://gist.githubusercontent.com/mchoi2000/daaa11ca99d611151cb5530512999a1e/raw/UN_Population_2019.csv';

export const useData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);
  
	return data;
}