import React from 'react'

import { colors, Grid2 } from '@mui/material'
import { Badge } from '@mui/icons-material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import CommonButton from '../../components/common/CommonButton'

const Authentication = () => {
    const buttonStyles = {
            fontSize:'0.75rem',
            fontWeight:500,
            backgroundColor:'#33ccff',
            textTransform: 'capitalize',
            borderRadius:2.5,
            '&.MuiButton-contained' :{
                backgroundColor: '#33ccff',
                '&:hover' : {
                    backgroundColor:'#4bff33'
                },
            },
            '&.MuiButton-outlined' : {
                color: '#FFF',
                borderColor: '#Faed23',
                '&:hover' : {
                    backgroundColor: '#Faed23',
            }
        }
    }

    const debuggingButton = (target) => {
        console.log(`${target} is clicked`);
    }
    return (
        <>
        // Using Grid2 to justify 

        <Grid2 
            container display={'flex'}
            justifyContent={'center'} 
            alignItems={'center'}
            alignContent={'flex-start'}
            spacing={1.6}
            margin={'0 0 0 500px'}
            
            >

            <h1>
                This is Authentication page
            </h1>


            <CommonButton
                sx={buttonStyles}
                variant="contained"
                // onClick={() => console.log("Submit button are clicked!")}
            >
                Submit
            </CommonButton>

            <CommonButton
                sx={buttonStyles}
                variant="outlined"
                // onClick={() => console.log("Add user is clicked!")}
            >
                Add user
            </CommonButton>
            <CommonButton
                sx={buttonStyles}
                variant="secondary"
                disabled={true}
                // onClick={() => console.log("Remove user is clicked!")}
            >
                Remove user
            </CommonButton>

        </Grid2>
        
        </>
    )
}


export default Authentication