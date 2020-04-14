import styled from 'styled-components'

const InvalidStyles = styled.ul`
  Width: 10px;
  margin-top :10px;
  margin-bottom: 0px;
  margin-left: 10PX;
  top: 0; bottom: 0;
  font-family: "Arial", sans-serif;
  color: #ffffff;
  background-color: #FFF;
  /* some comments */
  opacity: .5;
  &:after {
    content: '';
  }
  >li:not( :first-child) {
    margin-top: 10px;
  }
  div{}
  [ _target= blank ] {
    display: block;
  }
  display: block

`

const ValidStyles = styled.ul`
  width: 10px;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: 10px;
  top: 0;
  bottom: 0;
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #fff;

  /* some comments */
  opacity: 0.5;
  &::after {
    content: '';
  }
  > li:not(:first-child) {
    margin-top: 10px;
  }
  div {
    display: block;
  }
  [_target='blank'] {
    display: block;
  }

  display: block;
`

// for 'no-descending-specificity' check
const ValidStyles2 = styled.ul`
  > li {
    display: block;
  }
`
