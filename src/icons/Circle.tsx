const Circle = ({ color = "currentColor", size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <circle cx="12" cy="12" r="10" stroke="color" strokeWidth="4" />
  </svg>
);

export default Circle;
