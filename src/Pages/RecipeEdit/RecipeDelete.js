// import React from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// const DeleteModal = ({ isOpen, toggle, deleteRecipe, currentRecipe }) => {
//   const handleDelete = () => {
//     if (currentRecipe && currentRecipe.id) {
//       deleteRecipe(currentRecipe.id);
//     } else {
//       console.error("Current recipe or its id is undefined");
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Delete Recipe</ModalHeader>
//       <ModalBody>
//         Are you sure you want to delete this recipe?
//       </ModalBody>
//       <ModalFooter>
//         <Button color="danger" onClick={handleDelete}>Delete</Button>
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default DeleteModal;
