import { useCallback, useState, useMemo } from 'react';
import { scaleTime, extent, max, scaleLog, line, timeFormat, format } from 'd3';
import { XAxis } from './XAxis';
import { YAxis } from './YAxis';
import { VoronoiOverlay } from './VoronoiOverlay';
import { useCheckboxes, Checkboxes } from '../../components/checkboxes';

const xValue = (d) => d.date;
const yValue = (d) => d.deathTotal;

const margin = {
  top: 60,
  right: 140,
  bottom: 60,
  left: 110,
};

export const LineChart = ({ data, width, height }) => {
  const [activeRow, setActiveRow] = useState();

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const allData = useMemo(() => {
    return data.reduce(
      (accumulator, countryTimeseries) =>
        accumulator.concat(countryTimeseries),[]);
  },[data]);

  const epsilon = 1;

  const xScale = useMemo(() => scaleTime()
    .domain(extent(allData, xValue))
    .range([0, innerWidth]), [allData, xValue, innerWidth]);

  const yScale = useMemo(() => scaleLog()
    .domain([epsilon, max(allData, yValue)])
    .range([innerHeight, 0]), [epsilon, allData, yValue, innerHeight]);

  const lineGenerator = useMemo(() =>
  	line()
      .x((d) => xScale(xValue(d)))
      .y((d) => yScale(epsilon + yValue(d))), [xScale, yScale, xValue, yValue, epsilon]); 

  // console.log(activeRow);

  const handleVoronoiHover = useCallback(setActiveRow, []);

  const yMarkerLineValues = [0, 1000000, 2000000];
  // const xMarkerLineValues = yMarkerLineValues.map(
  //   (y) => data.filter((d) => d.deathTotal > y)[0]['date']
  // );
  const now = xScale.domain()[1];
  // xMarkerLineValues.push(now);
  
  const formatTime = timeFormat("%b %d, %Y");
	const formatComma = format(',');
  
  const Tooltip = ({activeRow, className}) => (
  	<text className={className} x={-10} y={-10} text-anchor={'end'}>
      {activeRow.countryName}: {formatComma(activeRow.deathTotal)} {activeRow.deathTotal > 1 ? 'deaths' : 'death'} as of {formatTime(activeRow.date)}
    </text>
  );

  const checkboxesList = [
    'Color lines',
    'Activate tooltip',
    'Show voronoi overlay'
  ];

  const checkboxes = useCheckboxes(checkboxesList);
  const selected = checkboxes.checkboxes
    .filter(t => t.checked).map(i => i.name).join('');

  const showColor = selected.toLowerCase().indexOf('color') > -1 ? true : false;
  const showActive = selected.toLowerCase().indexOf('tooltip') > -1 ? true : false;
  const showVoronoi = selected.toLowerCase().indexOf('voronoi') > -1 ? true : false;

  const linecolor = showColor ? "color" : "nocolor";

  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <XAxis xScale={xScale} innerHeight={innerHeight} />
          <YAxis yScale={yScale} innerWidth={innerWidth} />
          {showColor ? (data.map((countryTimeseries) => {
            const r = Math.random() * 255;
            const g = Math.random() * 255;
            const b = Math.random() * 255;
            const strokeColor = `rgb(${r},${g},${b})`;
            
            return (
              <path className={linecolor}
              stroke={strokeColor}
              d={lineGenerator(countryTimeseries)} />
              );
            })) 
            :
            (data.map((countryTimeseries) => {
              return (
                <path
                className="marker-line"
                d={lineGenerator(countryTimeseries)}
                />
                );
              })
            )
          }

          {showActive && activeRow && (
            <>
              <path
                className="marker-line active"
                d={lineGenerator(
                  data.find(
                    (countryTimeseries) =>
                    countryTimeseries.countryName ===
                    activeRow.countryName
                    )
                    )}
                    />
              <g transform={`translate(${lineGenerator.x()(activeRow)},${lineGenerator.y()(activeRow)})`}>
                <circle r={4} />
                <Tooltip activeRow={activeRow} className="voronoi-tooltip-stroke" />
                <Tooltip activeRow={activeRow} className="voronoi-tooltip" />
              </g>
            </>
          )}

          <text
            className="title"
            transform={`translate(${innerWidth / 2}, -45)`}
            text-anchor="middle"
            >
            COVID-19 Global Confirmed Cases by Country
          </text>
          <text
            className="axis-label"
            transform={`translate(-35 ,${innerHeight / 2}) rotate(-90)`}
            text-anchor="middle"
            >
            Cumulative Deaths
          </text>
          <text
            className="axis-label"
            transform={`translate(${innerWidth / 2}, ${innerHeight + 30})`}
            text-anchor="middle"
            alignment-baseline="hanging"
            >
            Time
          </text>
          <VoronoiOverlay
            margin={margin}
            onHover={handleVoronoiHover}
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            allData={allData}
            lineGenerator={lineGenerator}
            showVoronoi={showVoronoi}
            />
        </g>
      </svg>
      <div className="display-options" ><Checkboxes {...checkboxes} /></div>
    </>
  );
};
