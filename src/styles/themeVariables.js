import { css } from 'styled-components'
window.theme = {
  // default options
  effect: 'none', // 3d or flat
  fill: 'border', // primary, secondary, white, transparent
  curve: 'round', // round, semi or sharp
  height: 25,
  borderColor: 'secondary', // primary, secondary, white
  // primary
  primary: 'hsl(145,50%,33%)',
  primary95: 'hsl(145, 50%, 95%)',
  primary90: 'hsl(145, 50%, 90%)',
  primary80: 'hsl(145, 50%, 80%)',
  primary70: 'hsl(145, 50%, 70%)',
  primary60: 'hsl(145, 50%, 60%)',
  primary40: 'hsl(145, 50%, 40%)',
  primary30: 'hsl(145, 50%, 30%)',
  primary20: 'hsl(145, 50%, 20%)',
  // secondary
  secondary: 'hsl(196, 90%, 50%)',
  secondary95: 'hsl(196, 85%, 95%)',
  secondary90: 'hsl(196, 85%, 90%)',
  secondary80: 'hsl(196, 85%, 80%)',
  secondary70: 'hsl(196, 85%, 70%)',
  secondary60: 'hsl(196, 85%, 60%)',
  secondary40: 'hsl(196, 90%, 40%)',
  secondary30: 'hsl(196, 85%, 30%)',
  secondary20: 'hsl(196, 85%, 20%)',
  // success
  success: 'hsl(120, 85%, 50%)',
  success95: 'hsl(120, 80%, 95%)',
  success80: 'hsl(120, 80%, 80%)',
  success70: 'hsl(120, 80%, 70%)',
  success60: 'hsl(120, 80%, 60%)',
  success40: 'hsl(120, 80%, 40%)',
  success30: 'hsl(120, 80%, 30%)',
  success20: 'hsl(120, 80%, 20%)',
  // error
  error: 'hsl(0, 85%, 60%)',
  error95: 'hsl(0, 80%, 95%)',
  error80: 'hsl(0, 80%, 80%)',
  error70: 'hsl(0, 80%, 70%)',
  error60: 'hsl(0, 80%, 60%)',
  error40: 'hsl(0, 80%, 40%)',
  error30: 'hsl(0, 80%, 30%)',
  error20: 'hsl(0, 80%, 20%)',
  // warning
  warning: 'hsl(55, 85%, 50%)',
  warning80: 'hsl(55, 85%, 80%)',
  warning70: 'hsl(55, 85%, 70%)',
  warning60: 'hsl(55, 85%, 60%)',
  warning40: 'hsl(55, 85%, 40%)',
  warning30: 'hsl(55, 85%, 30%)',
  warning20: 'hsl(55, 85%, 20%)',
  center: css`
      display: flex;
      align-items: center;
      justify-content: center;
      `,
  clickable: css`
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
    `,
  ellipsis: css`
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  `,
  noScrollbar: css`
    &::-webkit-scrollbar{
      width: 0px;
    }
    &::-webkit-scrollbar-track-piece{
      background-color: transparent;
    }
  `
}
