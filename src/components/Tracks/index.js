import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Spacer,
  Flex,
  Image,
  Text,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react";

function Track({ imageUrl, title, artist, select, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(select);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  }

  return (
    <>
      <SlideFade in={true} offsetY="50px">
        <Box
          bgColor={useColorModeValue("gray.100", "gray.700")}
          borderRadius="md"
        >
          <Flex marginTop={'10px'} align="center">
            <Box>
              <Flex align="center">
                <Image
                  src={imageUrl}
                  alt="Album"
                  boxSize="100px"
                  borderRadius="md"
                  data-testid="song-image"
                />
                <Box pl="3">
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    data-testid="song-title"
                  >
                    {title}
                  </Text>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    data-testid="song-album"
                  >
                    {artist}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box pr="3">
            <Button
            variant="solid" colorScheme='blue'  style={{ borderRadius: 10 }}
            onClick={handleToggleSelect}
            data-testid="track-btn-select">
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
            </Box>
          </Flex>
        </Box>
      </SlideFade>
    </>
  );
}

Track.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  select: PropTypes.bool.isRequired,
};

export default Track;