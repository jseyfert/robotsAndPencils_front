// import React from 'react';
import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import LinkIcon from '@material-ui/icons/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import Client from "../Client";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundImage: "linear-gradient(lightblue, white)", /* Standard syntax (must be last) */
    color: "#043D67",
  },
  body: {
    fontSize: 15,
    // background: "url(/assets/background.jpg) no-repeat center center fixed",

    // backgroundColor: "rgba(253, 246, 246, 0.6)",
    // filter: "url(/assets/background.jpg) no-repeat center center fixed",
    // color: '#444444',
    // height: "65px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  // head: {
  //   backgroundColor: "black",
  //   // color: theme.palette.common.white,
  //   // background: "rgb(2,0,36)",
  //   // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.7161239495798319) 35%, rgba(0,212,255,1) 100%)"
  // },
  root: 
    {
      // borderCollapse: "separate",
      // borderSpacing: "0 15px",
      // backgroundColor: "red",
      // height: "65px",
      // borderRadius: "5px"
      // margin: "3px"
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const launches = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 24, 4.0),
  createData('Eclair', 262, 16.0, 24, 6.0, 24, 4.0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



export default function SimpleTable() {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  // const [launches, setLaunches] = useState([
  //   { name: 'Learn Hooks', name2: 'name2' }
  // ]);

  // async function fetchData() {
  //   const res = await fetch("https://robots-and-pencils-john.herokuapp.com/getLaunches");
  //   res
  //     .json()
  //     .then(res => setLaunches(res))
  //     // .then(res => setPlanets(res))
  //     // .catch(err => setErrors(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // handleSearchChange = e => {
  //   const value = e.target.value;

  //   this.setState({
  //     searchValue: value
  //   });

  //   if (value === "") {
  //     this.setState({
  //       foods: [],
  //       showRemoveIcon: false
  //     });
  //   } else {
  //     this.setState({
  //       showRemoveIcon: true
  //     });

  //     Client.search(value, foods => {
  //       this.setState({
  //         foods: foods.slice(0, MATCHING_ITEM_LIMIT)
  //       });
  //     });

  //   }
  // };


  return (
    <TableContainer id="asdf" component={Paper}>

        <Toolbar id="tableMenu"
        style={{color: 'white'}}
          >
          <IconButton aria-label="delete">
            <RefreshIcon />
          </IconButton>
    

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label="LAND SUCCESS"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="REUSED"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="primary"
            />
          }
          label="WITH REDDIT"
        />

        </Toolbar>
      <Table 
      className={classes.table} 
      id="backgroundPhoto"
      style={{
        borderCollapse:'separate',
        borderSpacing:'0 10px',

      }} aria-label="customized table">
        <TableHead id="rows">
          <TableRow >
            <StyledTableCell>Badge</StyledTableCell>
            <StyledTableCell align="right">Rocket Name</StyledTableCell>
            
            <StyledTableCell align="right">Rocket Type</StyledTableCell>
            <StyledTableCell align="right">Launch Date</StyledTableCell>
            <StyledTableCell align="right">Details</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Article</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {launches.map((row) => (
            <StyledTableRow key={row.name} id="tableRow" >
              <StyledTableCell component="th" scope="row" 
              // style={{borderRadius: "20px 0px 0px 20px"}}
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right" 
              // style={{borderRadius: "0px 20px 20px 0px"}}
              >
                <IconButton aria-label="delete" target="_blank" href="https://johnseyfert.com/">
                  <LinkIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
