import Dropdown from 'react-bootstrap/Dropdown';

function Menue() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic" >
        ...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Menue;