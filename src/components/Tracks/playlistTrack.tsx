import {
    Box,
    Image,
    SlideFade,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { playlistCardInterface } from "../../global/interface";
  
  const PlaylistCard = ({
    title,
    albumImage,
    owner,
    totalSong,
  }: playlistCardInterface) => {
    return (
      <>
        <SlideFade in={true} offsetY="50px">
          <Box
            bgColor={useColorModeValue("gray.100", "gray.700")}
            maxW="300px"
            p={5}
            borderRadius="md"
          >
            <Image src={albumImage} borderRadius="md" mb={3} />
            <Box>
              <Text fontWeight="semibold" fontSize="2xl">
                {title}
              </Text>
              <Text color={useColorModeValue("gray.500", "gray.400")}>
                By {owner}, {totalSong} songs
              </Text>
            </Box>
          </Box>
        </SlideFade>
      </>
    );
  };
  
  export default PlaylistCard;