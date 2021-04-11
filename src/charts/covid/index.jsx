import { range } from 'd3';
import { useData } from './useData';
import { LineChart } from './LineChart';
import './index.css';

// const width = window.innerWidth;
const width = 1200;
const height = 650;

const array = range(6 * 3);

export const Covid = () => {
  const data = useData();
  
	return data 
    ? <div className="voronoi-chart"><LineChart data={data} width={width} height={height} /></div>
    : <pre className="loading">Loading...</pre>;
};