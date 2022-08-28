import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../pages/superHeroRedux/Slice";

export const CustomModel = ({ title, children, ...rest }) => {
  const dispatch = useDispatch();

  const { showModal } = useSelector((state) => state.superHero);
  
  return (
    <Modal
      show={showModal}
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="model"
      centered
      onHide={() => dispatch(setShowModal(false))}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(setShowModal(false))}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
