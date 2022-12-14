import {
    Button,
    Img,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  
  const SignUp = () => {
    const OverlayOne = () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    );
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);
    return (
      <>
        <>
      
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>
                <Img
                  src="https://www.kindmeal.my/images/logo-kindmeal.png"
                  alt="logo"
                />
                <Text
                  style={{
                    fontSize: "25px",
                    fontFamily: "'Roboto', Arial",
                    color: "gray",
                    marginLeft: "20px",
                  }}
                >
                  Join KindMeal For FREE Now
                </Text>
                <Text style={{ fontSize: "15px", marginLeft: "27px" }}>
                  Please select the type of membership to proceed
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Custom backdrop filters!</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </>
    );
  };
  
  export default SignUp;