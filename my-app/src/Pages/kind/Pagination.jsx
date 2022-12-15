import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import {ArrowRightIcon,ArrowLeftIcon} from '@chakra-ui/icons'

function Pagination({totalPages,currentPage , handlePageChange , handleOnePageChange}){
    // const style={
    //     color:'#fff',
    // }
    let pages = new Array(totalPages).fill(0).map((page,i)=> 
        <Button disabled={currentPage === i+1} key={i+1} fontSize='1.5vw' colorScheme='teal' variant='ghost' onClick={()=>{handlePageChange(i+1)}} > {i+1}  </Button>
        )
        return(
            <>
            <Flex w='80%' margin='50px auto' justifyContent='space-between'>
                <Flex   fontSize='1.5vw' alignItems='center' > Pages:  {pages} </Flex>
                <Box>
                    <Button onClick={()=>{handleOnePageChange(-1)}} style={{visibility: currentPage===1 ? 'hidden' : 'visible' }} mr={2} > 
                    <Icon boxSize='2' mr='2' mt='1' as={ArrowLeftIcon} />
                    Prev </Button>

                    <Button onClick={()=>{handleOnePageChange(+1)}} style={{visibility: currentPage !== totalPages ? 'visible' : 'hidden' }} >Next <Icon boxSize='2' ml='2' mt='1' as={ArrowRightIcon} />
                    </Button>
                </Box>
            </Flex>
            </>
        )
}
export default Pagination;