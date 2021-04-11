import { useState } from 'react';
import { useData } from './useData';
import { useWorldAtlas } from './useWorldAtlas';
import { BubbleMap } from './BubbleMap/index';
import { DateHistogram } from './DateHistogram/index';
import './index.css';

// const width = window.innerWidth;
// const height = window.innerHeight;
const width = 1000;
const height = 650;
const dateHistogramSize = 0.2;
const setBrushExtent = () => {};
const xValue = d => d['Reported Date'];

export const Migrants = () => {
  const data = useData();
  const worldAtlas = useWorldAtlas();
  const [brushExtent, setBrushExtent] = useState();
  

  if (!data || !worldAtlas) {
    return <pre className="loading">Loading...</pre>;
  }
  
  const filteredData = brushExtent ? data.filter(d => {
    const date = xValue(d);
    return date > brushExtent[0] && date < brushExtent[1];
  }) : data;

  return (
    <div className="globalmap">
      <svg width={width} height={height}>
        <BubbleMap data={data} filteredData={filteredData} worldAtlas={worldAtlas} />
        <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
          <DateHistogram 
            data={data} 
            width={width} 
            height={dateHistogramSize * height} 
            setBrushExtent={setBrushExtent} 
            xValue={xValue}
          />
        </g>
      </svg>
    </div>
  );
};
