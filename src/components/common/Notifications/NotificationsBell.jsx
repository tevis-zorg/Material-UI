// Organizing the sub Component icons into a seperate folder and file;
import React from 'react'

import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationsBell = () => {
  return (
    <Badge badgeContent={4} color="primary">
        <NotificationsIcon />
    </Badge>
  )
}

export default NotificationsBell
/*
 TODO : 

 section 4 badge data display "notification" 
 (apply any customization available)

 */