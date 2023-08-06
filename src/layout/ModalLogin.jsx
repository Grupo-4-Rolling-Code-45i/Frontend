
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LoginUi from "./LoginUi";

const ModalLogin = ({show , handleClose}) => {
  
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LoginUi/>

    </Modal.Body>
    {/* <Modal.Footer >
      
    <Button variant="secondary" size="lg" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer> */}
  </Modal>
  );
};

export default ModalLogin;
