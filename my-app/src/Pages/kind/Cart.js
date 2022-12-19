import {
  Grid,
  GridItem,
  Button,
  Text,
  Heading
  ,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Card = ({ id, name, des, phone, foodimg, opening, avtar }) => {
  return (
    <GridItem
      key={id}
      paddingTop="20px"
      rowGap="50px"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
      borderRadius="15px"
      id={id}
    >
      <Grid templateColumns="repeat(3,1fr)" gap={"-10px"}>
        <Image
          src={avtar}
          alt={name}
          height="50px"
          width="50px"
          borderRadius="50%"
        />
        <Heading fontSize={["18px", "", "16px"]}>{name}</Heading>
        <Button colorScheme="red">
          <Link to={`/kindmoments/${id}`}>View</Link>
        </Button>
      </Grid>
      <Image
        src={foodimg}
        alt="Dan Abramov"
        width="100%"
        height="250"
        marginTop="20px"
      />

      <Text paddingTop="10px">{des}</Text>
    </GridItem>
  );
};
export default Card;
