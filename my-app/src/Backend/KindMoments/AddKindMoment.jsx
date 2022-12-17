import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Lorem,
  Box,
  Textarea,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
let IntialData = {
  id: Date.now(),

  photo: "",

  place: "",

  descrition: "",
};
function AddKindMoment() {
  let [kindMoment, setKindMoment] = useState(IntialData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    let { value, name } = e.target;

    setKindMoment({ ...kindMoment, [name]: value });
  };
  const handleSubmit = () => {
    console.log(kindMoment);
    if (kindMoment.photo && kindMoment.place && kindMoment.descrition) {
      //   axios
      //     .post("https://mock-server-app-pzg9.onrender.com/kindmealRecipes", {
      //       ...shopData,
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      setKindMoment(IntialData);
      onClose();
    } else {
      alert("Please fill all required fields");
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share A KindMoment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              {" "}
              Share your delicious meat-free meal or drinks with food lovers out
              there! Just select the photo, write a description and optionally
              include the location. Do share it with your friends on social
              media too!
            </Box>
            <Box mt="20px" display="flex" flexDirection="column" gap={5}>
              {" "}
              <FormControl
                isRequired
                display="flex"
                justifyContent="space-between"
              >
                <FormLabel w="30%">Add Photo</FormLabel>

                <Input
                  name="photo"
                  onChange={handleChange}
                  type="email"
                  width="70%"
                  value={kindMoment.photo}
                  placeholder="+ Add Photo url"
                />
              </FormControl>
              <FormControl
                isRequired
                justifyContent="space-between"
                display="flex"
              >
                <FormLabel w="30%">Place</FormLabel>

                <Input
                  name="place"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  value={kindMoment.place}
                  placeholder="Where is the place?"
                />
              </FormControl>
              <FormControl
                isRequired
                justifyContent="space-between"
                display="flex"
              >
                <FormLabel w="30%">Describe Moment</FormLabel>

                <Box w="70%">
                  <Textarea
                    type="text"
                    name="descrition"
                    onChange={handleChange}
                    height=" 150px"
                    borderRadius="10px"
                    // value={kindMoment.descrition}
                    placeholder="Describe your yummylicious moment..."
                  />
                </Box>
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="green" mr={3}>
              Share Moment
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AddKindMoment;
