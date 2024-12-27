import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../styles/ProductPage.css';

export default function ProductInfo() {
    return (
        <div className='productPage_productInfo'>
            <Accordion sx={{ backgroundColor: '#e1f0ff', boxShadow: 'none', border: 'none' }}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ paddingLeft: 0 }}
                >
                    <Typography component="span" className='productInfo_title' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Product Details</Typography>
                </AccordionSummary>
                <AccordionDetails className='productInfo_details' sx={{ paddingLeft: 0 }}>
                    <Typography>
                        <table className='productPage_table'>
                            <tbody>
                                <tr>
                                    <td><strong>Size:</strong></td>
                                    <td>{"0"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Material:</strong></td>
                                    <td>{"tescter"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Color:</strong></td>
                                    <td>{"Red"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Brand:</strong></td>
                                    <td>{"Puma"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}