import React from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import { Drawer, List, ListItemIcon, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left" ModalProps={{
      keepMounted: false,
    }}>
      <List>
        <ListItemButton onClick={() => navigate('/add-applicant')}> {/* Updated to use navigate */}
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Applicants" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default NavigationBar;