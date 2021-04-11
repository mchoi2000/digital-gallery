import { format, time } from 'd3';

export const XMarkerLine = ({scale, values, innerHeight}) => {
  const markerLineY1 = 0;
  const markerLineY2 = innerHeight;

  return values.map (value => {
    const markerLineX = scale(value);
    const dateStr = value.toString().split(" ");
    const markerLabel = `${dateStr[1]}-${dateStr[2]}-${dateStr[3]}`;

    return (markerLabel === 'Jan-22-2020' ?
      (<text
          text-anchor="middle"
          alignment-baseline="hanging"
          x={markerLineX}
          y={markerLineY2 + 7}
        >
        {markerLabel}
        </text>)
      : 
      (<>
         <line
            className="marker-line"
            x1={markerLineX}
            y1={markerLineY1}
            x2={markerLineX}
            y2={markerLineY2}
          />
          <text
            text-anchor="middle"
            alignment-baseline="hanging"
            x={markerLineX}
            y={markerLineY2 + 7}
          >
          {markerLabel}
          </text>
        </>
      )
    );
  });
};