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
    left: 50%;
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    background-color: black;
    color: white;
    font-size: 12px;
    box-shadow: 0 0 5px black;
    transform: translateX(-50%) translateY(-50%);
  }
`

export default LoadingCover
