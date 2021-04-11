import { format } from 'd3';

export const YMarkerLine = ({scale, values, innerWidth}) => {
  const markerLineX1 = 0;
  const markerLineX2 = innerWidth;

  return values.map (value => {
    const markerLineY = scale(value);
    const markerLabel = format(",d")(value);
    
    return value !== 0 && (
      <>
       <line
          className="marker-line"
          x1={markerLineX1}
          y1={markerLineY}
          x2={markerLineX2}
          y2={markerLineY}
        />
        <text
          text-anchor="end"
          alignment-baseline="middle"
          x={markerLineX1 - 7}
          y={markerLineY}
        >
        {markerLabel}
        </text>
      </>
    );
  });
};