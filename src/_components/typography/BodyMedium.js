import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from "./typography.module.css"


export default function BodyMedium({ text, textColor, color, children }) {

  textColor ? color = textColor : null
  color ? color = color : color = 'white'

  return (
    <Box color={textColor} className={styles.bodyContent2}>
      {
      text ?
      <Box 
        dangerouslySetInnerHTML={{ __html: text }} 
        fontSize={{ base: '1rem', md: '1rem' }}
        lineHeight={{ base: '152%', md: '154%' }}
        fontWeight='400'
        color={color}
      ></Box> :
      <Box 
        fontSize={{ base: '1rem', md: '1rem' }}
        lineHeight={{ base: '152%', md: '154%' }}
        color={color}
        fontWeight='400'
      >{children}</Box>
}
    </Box>
  )}

