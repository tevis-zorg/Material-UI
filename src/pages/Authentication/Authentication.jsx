import React from 'react'

import { colors, Grid2 } from '@mui/material'

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
            <div style={{display:'flex',flexDirection:'column',alignItems:'center', backgroundColor:'purple'}}>
                <h1>
                    This is Authentication page
                </h1>
            </div>


            

        </Grid2>
        
        </>
    )
}


export default Authentication