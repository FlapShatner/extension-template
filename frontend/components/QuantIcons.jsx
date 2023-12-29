export default function QuantIcons({ name, size, className }) {
 return (
  <div>
   {name == 'minus' ? (
    <svg
     stroke='#fff'
     fill='#fff'
     x='0px'
     y='0px'
     width={size}
     height={size}
     viewBox='0 0 14 14'>
     <rect
      x='6'
      transform='matrix(6.123234e-17 -1 1 6.123234e-17 0 14)'
      width='2.1'
      height='14'></rect>
    </svg>
   ) : (
    <svg
     stroke='#fff'
     fill='#fff'
     x='0px'
     y='0px'
     width={size}
     height={size}
     viewBox='0 0 14 14'>
     <polygon points='14,6 8,6 8,0 6,0 6,6 0,6 0,8 6,8 6,14 8,14 8,8 14,8 '></polygon>
    </svg>
   )}
  </div>
 )
}
