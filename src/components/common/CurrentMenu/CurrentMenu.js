import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuCard from '../MenuCard/MenuCard'
import { items } from '../../../itemData';
import { menuStyles } from './styles';

const CurrentMenu = () => {

  const [currMenu, setCurrMenu] = useState(items[0]);

  const onMenuChange = (item) => {
    if(item != currMenu){
      setCurrMenu(item)
    }
  }

  return (
    <Box sx={menuStyles.wrapper}>
      <Box sx={menuStyles.menuCarasoul}>
        {items.map((item) => (
            <Button sx={item.title == currMenu.title ? {fontSize: "20px", textDecoration: "underline", fontWeight: "1000"} : {fontSize: "20px", fontWeight: "1000"}}
                    onClick={() => onMenuChange(item)}>{item.title}</Button>
        ))}
      </Box>
      <Box sx={menuStyles.menuCarasoul}>
        {currMenu.items.map((item) => (
          <MenuCard 
          image={item.image}
          title={item.title}
          description={item.description} />
        ))}
      </Box>
    </Box>    
  )
}

export default CurrentMenu