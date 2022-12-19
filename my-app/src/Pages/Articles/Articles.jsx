import Directory1 from "./Articles1";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "./Cart";
import { useEffect, useState } from "react";
import { getaddress } from "./api";
import Pagination from "./Pagination";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};

const Article = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);
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

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

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
      <Box width={"60%"} margin="auto">
        <SimpleGrid columns={[1, 1, 1]} spacing="40px">
          {data.map((el) => (
            <Card
              id={el.id}
              articlesimg={el.articlesimg}
              articletitle={el.articletitle}
              description={el.description}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Article;
