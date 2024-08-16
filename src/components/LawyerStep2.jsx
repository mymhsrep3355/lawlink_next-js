// components/StepTwo.js
import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
  VStack,
} from '@chakra-ui/react';

const LawyerStep2 = ({ formData, handleChange }) => {
  return (
    <Box
      p={6}
      boxShadow="lg"
      borderRadius="md"
      bg="gray.50"
      maxW="md"
      mx="auto"
    >
      <VStack spacing={6}>
        <FormControl id="cnicFrontPicture" isRequired>
          <FormLabel>CNIC Front Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            focusBorderColor="red.500"
            onChange={(e) => handleChange(e, 'cnicFrontPicture')}
          />
          {formData.cnicFrontPicture && (
            <Image
              src={formData.cnicFrontPicture}
              alt="CNIC Front"
              mt={4}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
              boxShadow="sm"
            />
          )}
        </FormControl>

        <FormControl id="cnicBackPicture" isRequired>
          <FormLabel>CNIC Back Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            focusBorderColor="red.500"
            onChange={(e) => handleChange(e, 'cnicBackPicture')}
          />
          {formData.cnicBackPicture && (
            <Image
              src={formData.cnicBackPicture}
              alt="CNIC Back"
              mt={4}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
              boxShadow="sm"
            />
          )}
        </FormControl>

        <FormControl id="degreeCertificate" isRequired>
          <FormLabel>Law Degree Certificate</FormLabel>
          <Input
            type="file"
            accept="image/*"
            focusBorderColor="red.500"
            onChange={(e) => handleChange(e, 'degreeCertificate')}
          />
          {formData.degreeCertificate && (
            <Image
              src={formData.degreeCertificate}
              alt="Degree Certificate"
              mt={4}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
              boxShadow="sm"
            />
          )}
        </FormControl>
      </VStack>
    </Box>
  );
};

export default LawyerStep2;
