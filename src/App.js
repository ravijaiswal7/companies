import React from 'react'
import './App.css'
import { Typography, Card, CardContent, Grid, TextField, Select, Button, MenuItem, FormControl, InputLabel } from '@material-ui/core'

const App = () => {
  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
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
                <TextField label="Company Name" placeholder='Enter Company Name' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Company Domain" placeholder='Enter Company Domain' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <FormControl fullWidth>
                  <InputLabel id="company-sector-select-label">Company Sector</InputLabel>
                  <Select
                    // value={}
                    labelId="company-sector-select-label"
                    id="company-sector-select"
                    defaultValue='Automobile'
                    onChange={handleChange}
                    label="Company Sector"
                    variant='outlined'
                    required
                  >
                    <MenuItem alignItems='flex-start' value='Automobile'>Automobile</MenuItem>
                    <MenuItem alignItems='flex-start' value='FMCG'>FMCG</MenuItem>
                    <MenuItem alignItems='flex-start' value='Oil'>Oil</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default App