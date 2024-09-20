import React, { useState } from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Property from './Property';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
        <img src={imageUrl} alt="banner" width={500} height={300} />
        <Box p='5'>
            <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
            <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
            <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
            <Button
                fontSize="lg"
                bg="#37B9F1"
                color="white"
                px="4"
                py="2"
                fontWeight="medium"
                borderRadius="lg"
                _hover={{ bg: '#32a6d8' }}
                _focus={{ outline: 'none', ring: 4, ringColor: 'blue.300' }}
            >
                <Link
                    to={linkName}
                    style={{ display: 'inline-block', width: '100%', height: '100%' }}
                >
                    {buttonText}
                </Link>
            </Button>

        </Box>
    </Flex>
);

const Home = () => {
    // Static sample data for properties
    const propertiesForRent = [
        { id: 1, title: 'Apartment in City Center', price: '1,000', location: 'City Center' },
        { id: 2, title: 'Luxury Villa', price: '5,000', location: 'Uptown' },
        { id: 3, title: 'Cozy Cottage', price: '800', location: 'Suburbs' }
    ];

    const propertiesForSale = [
        { id: 4, title: 'Modern Apartment', price: '200,000', location: 'City Center' },
        { id: 5, title: 'Spacious Villa', price: '450,000', location: 'Uptown' },
        { id: 6, title: 'Country House', price: '300,000', location: 'Countryside' }
    ];

    return (
        <Box>
            <Banner
                purpose='RENT A HOME'
                title1='Rental Homes for'
                title2='Everyone'
                desc1='Explore from Apartments, builder floors, villas'
                desc2='and more'
                buttonText='Explore Renting'
                linkName='/search?purpose=for-rent'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
            />
            <Flex flexWrap='wrap'>
                {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            <Banner
                purpose='BUY A HOME'
                title1='Find, Buy & Own Your'
                title2='Dream Home'
                desc1='Explore from Apartments, land, builder floors,'
                desc2='villas and more'
                buttonText='Explore Buying'
                linkName='/search?purpose=for-sale'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
            />
            <Flex flexWrap='wrap'>
                {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
        </Box>
    );
};

export default Home;
