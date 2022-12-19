import Directory1 from "./Kind1";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "./Cart";
import { useEffect, useState } from "react";
import { getaddress } from "./api";
import Pagination from "./Pagination";

const Kind = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [find, setfind] = useState("");
  const [country, setCountry] = useState("");
  const fetchCitiesDataAndUpdate = (page, find, country) => {
    getaddress({ page, limit: 6, find, country })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page, find, country);
  }, [page, find, country]);

  const getData = (el) => {
    setfind(el);
  };
  const getcount = (el) => {
    setCountry(el);
  };

  return (
    <Box  pt={["60px", " ", "160px"]}>
      {/* ################################################################# */}
      <Directory1 onSubmit={getData} onSubmit1={getcount} />
      {/* ########################################################################## */}
      <Stack
        direction="row"
        spacing={50}
        px
        align="center"
        width="80%"
        margin="auto"
        padding={10}
        gap="30px"
      >
        <Text fontSize="20px">Page</Text>
        <Pagination
          total={6}
          current={page}
          onChange={(value) => setPage(value)}
        />
        {/* &rbrace; */}
      </Stack>

      {/* ########################################################################## */}
      <Box width={"80%"} margin="auto">
        <SimpleGrid columns={[1, 2, 3]} spacing="40px" width={"50"}>
          {data.map((el) => (
            <Card
              id={el.id}
              name={el.name}
              des={el.description}
              phone={el.phone}
              opening={el.opening}
              address={el.address}
              avtar={el.avtar}
              foodimg={el.foodimg}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Kind;
