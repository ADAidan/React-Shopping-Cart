import React, { useContext } from 'react';
import { ProductViewContext } from '../context/product-view-context.js';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Box from '@mui/material/Box';

export default function ToggleProductView() {
    const { view, setView } = useContext(ProductViewContext);
    
    const handleChange = (event, value) => { 
        setView(value);
    };

    return (
        <Box
        sx={{
            p: 2,
        }}
        >
            <ToggleButtonGroup 
                color='primary'
                size='large'
                value={view}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    <ViewModuleIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}