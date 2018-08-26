/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - LoadingCover
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import styled from 'styled-components'

const LoadingCover = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, .7);

  &:after {
    content: 'Loading...';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    text-shadow: 1px 1px 0 #CCC;
    transform: translateY(-50%);
  }
`

export default LoadingCover
