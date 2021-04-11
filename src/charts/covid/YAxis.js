import { useEffect, useRef } from 'react';
import { select, axisLeft } from 'd3';

export const YAxis = ({ yScale, innerWidth }) => {
  const ref = useRef();

  useEffect(() => {
    const yAxisG = select(ref.current);
    const yAxis = axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(5)
    	.ticks(20, "~s");
    	// .tickFormat((tickValue) => tickValue);
    yAxisG.call(yAxis);
  }, []);

  return <g ref={ref} />;
};
