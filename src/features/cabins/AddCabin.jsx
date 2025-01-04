import { useState, useEffect } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin({ isEdit, cabin={} }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Automatically open the modal if editing
  useEffect(() => {
    if (isEdit) {
      setIsOpenModal(true);
    }
  }, [isEdit]);

  return (
    <div>
      {!isEdit && (
        <Button onClick={() => setIsOpenModal((show) => !show)}>
          Add new cabin
        </Button>
      )}

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm
            onClose={() => setIsOpenModal(false)}
            cabinToEdit={isEdit ? cabin : {}} // Pass cabin details if editing
          />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
