export const fadeAnimation = (xAxisStart, yAxisStart, xAxisEnd, yAxisEnd, delay, duration) => ({
  initial: { x:xAxisStart, y: yAxisStart, opacity: 0 },
  whileInView: { x:xAxisEnd, y:yAxisEnd, opacity: 1 },
  transition: { delay, duration },
});
