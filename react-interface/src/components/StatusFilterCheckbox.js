import Form from 'react-bootstrap/Form'

const StatusFilterCheckbox = ({ status, onSelectionChange }) => {
  return (
    <Form.Check type='checkbox' id={status.getId()} label={status.getName()} onChange={onSelectionChange} defaultChecked={true}/>
  )
}

export default StatusFilterCheckbox