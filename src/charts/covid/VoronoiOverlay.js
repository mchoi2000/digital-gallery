import { Delaunay } from 'd3';
import { useMemo } from 'react';
export const VoronoiOverlay = ({
  margin,
  innerWidth,
  innerHeight,
  allData,
  lineGenerator,
  onHover,
  showVoronoi
}) => {
  // useMemo(() => {
  // 	console.log('memoizing');
  // }, [allData]);
  return useMemo(() => {
    // console.log('memoizing...');
    const points = allData.map(d => [lineGenerator.x()(d),lineGenerator.y()(d)]);
    const delaunay = Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, innerWidth + margin.right, innerHeight]);
    const color = showVoronoi ? "color" : "nocolor";
  	
    return (
      <g className="voronoi">
        {points.map((point, i) => (
          <path className={color}
            onMouseEnter={() => onHover(allData[i])}
            d={voronoi.renderCell(i)}
          />
        ))}
      </g>
    );
	}, [allData, lineGenerator, innerWidth, innerHeight, onHover, showVoronoi]);
};
