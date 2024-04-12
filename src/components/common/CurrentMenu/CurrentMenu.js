import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuCard from '../MenuCard/MenuCard'
import { items } from '../../../itemData';
import { menuStyles } from './styles';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const CurrentMenu = () => {

  const [currMenu, setCurrMenu] = useState(items[0]);
  const [value, setValue] = useState(0)

  const onMenuChange = (item) => {
    if(item != currMenu){
      setCurrMenu(item)
    }
  }

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt="300px">
      <Grid item container justifyContent="flex-start"  width={{xs: "300px", md: "1172px"}}>
        <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons="auto" aria-label="basic tabs example">
            {items.map((item, index) => (
                <Tab label={item.title} id={`simple-tab-${index}`} aria-controls={`simple-tabpabel-${index}`} />
            ))}
        </Tabs>
        {/*{items.map((item) => (
            <Grid item>
            <Button sx={item.title == currMenu.title ? {fontSize: "20px", textDecoration: "underline", fontWeight: "1000"} : {fontSize: "20px", fontWeight: "1000"}}
                    onClick={() => onMenuChange(item)}>{item.title}</Button>
            </Grid>
        ))}*/}
      </Grid>
      <Grid item sx={menuStyles.menuCarasoul}>
        {items[value].items.map((item) => (
          <MenuCard 
          image={item.image}
          title={item.title}
          description={item.description} />
        ))}
      </Grid>
    </Grid>    
  )
}

export default CurrentMenu