import { Modal, Text, Button } from "@nextui-org/react";

function GeneralModal({ title, component, visible, onClose }) {
  return (
    <Modal
      scroll={true}
      open={visible}
      width="900px"
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          {title}
        </Text>
      </Modal.Header>
      <Modal.Body>{component}</Modal.Body>
      <Modal.Footer>
        <Button flat auto color="error" onPress={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GeneralModal;
