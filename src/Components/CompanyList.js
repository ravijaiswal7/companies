import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Typography,
} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import '../App.css'


const CompanyList = () => {

  const companyList = useSelector((state) => state.company.items)

  return (
    <div className='companyDetails'>
      <Typography variant='h4'>Company Details</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="company table">
          <TableHead>
            <TableRow>
              <TableCell>CompanyId</TableCell>
              <TableCell align="right">CompanyName</TableCell>
              <TableCell align="right">CompanyDomain</TableCell>
              <TableCell align="right">CompanySector</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companyList.map((row) => (
              <TableRow
                key={row.companySector}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.companyId}
                </TableCell>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{row.companyDomain}</TableCell>
                <TableCell align="right">{row.companySector}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div class="d-flex justify-content-around">
        <Link to="/add-company" variant='contained' className="btn btn-primary mt-3">
          Add Company
        </Link>
        <Link to="/" variant='contained' className="btn btn-primary mt-3">
          Go To Dashboard
        </Link>
      </div>

    </div>
  );
}

export default CompanyList