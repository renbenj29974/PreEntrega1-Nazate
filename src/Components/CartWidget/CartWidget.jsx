import React from 'react';
import { Box, Menu } from '@mui/material'

const CartWidget = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 0 }}>
              <img src="car.png" alt=""  />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
            </Menu>
          </Box>       
    </div>
  )
}

export default CartWidget
