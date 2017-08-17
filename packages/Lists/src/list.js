import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class List extends Component {
  render(props) {
    const List = styled.ul`
      margin: 0;
      padding: 8px 0;
      list-style: none;
    `
    return <List>{props.children}</List>
  }
}