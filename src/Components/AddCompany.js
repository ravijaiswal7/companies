import React, { useState } from 'react'
import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Select,
    Button,
    MenuItem,
    FormControl,
    InputLabel
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { addCompany } from '../actions';
import { Link } from "react-router-dom";

const AddCompany = () => {
    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.company.items)

    const [companyName, setcompanyName] = useState('');
    const [companyDomain, setcompanyDomain] = useState('')
    const [companySector, setcompanySector] = useState('Automobile')


    const handleSubmit = e => {
        e.preventDefault();
        const items = [];
        const companyObj = {
            companyId: companyList?.length + 1,
            companyName,
            companyDomain,
            companySector
        };
        items.push(companyObj);
        dispatch(addCompany(items));
        setcompanyName('');
        setcompanyDomain('');
        setcompanySector('Automobile');
    }

    return (
        <div className='App'>
            <Typography variant='h3'>React App</Typography>
            <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>Add Company Details</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    label="Company Name"
                                    placeholder='Enter Company Name'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    value={companyName}
                                    onChange={(e) => setcompanyName(e.target.value)}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Company Domain"
                                    placeholder='Enter Company Domain'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    value={companyDomain}
                                    onChange={(e) => setcompanyDomain(e.target.value)}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl fullWidth>
                                    <InputLabel id="company-sector-select-label">Company Sector</InputLabel>
                                    <Select
                                        labelId="company-sector-select-label"
                                        id="company-sector-select"
                                        defaultValue={companySector}
                                        label="Company Sector"
                                        variant='outlined'
                                        required
                                        value={companySector}
                                        onChange={(e) => setcompanySector(e.target.value)}
                                    >
                                        <MenuItem alignItems='flex-start' value='Automobile'>Automobile</MenuItem>
                                        <MenuItem alignItems='flex-start' value='FMCG'>FMCG</MenuItem>
                                        <MenuItem alignItems='flex-start' value='Oil'>Oil</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    {companyList?.length > 0 && (
                        <Link to="/view-company" variant='contained' className="btn btn-primary w-100 mt-3">
                            View Company
                        </Link>
                    )
                    }
                </CardContent>
            </Card>
        </div>
    )
}

export default AddCompany