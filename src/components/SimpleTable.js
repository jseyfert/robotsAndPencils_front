import React, { useState, useEffect } from 'react';
import moment from 'moment';
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
import LinkIcon from '@material-ui/icons/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ReactComponent as Logo } from '../refresh.svg';
// import Client from "../Client";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundImage: "linear-gradient(lightblue, white)", /* Standard syntax (must be last) */
    color: "#043D67",
    fontSize: "17px",
  },
  body: {
    color: "444444",
    fontSize: 15,
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
      // fontSize: "33px",
      // borderCollapse: "separate",
      // borderSpacing: "0 15px",
      // backgroundColor: "red",
      // height: "65px",
      // borderRadius: "5px"
      // margin: "3px"
    },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const launches = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 24, 4.0),
//   createData('Eclair', 262, 16.0, 24, 6.0, 24, 4.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// var timestamp = moment.unix(1143239400);
// // var timestamp2 = moment.unix(1143239400);
// console.log( 'here====', moment.unix(1143239400).format('l') );
// // console.log( 'here2====', timestamp2.toDate() );

export default function SimpleTable() {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [launches, setLaunches] = useState([
    { name: 'Learn Hooks', name2: 'name2' }
  ]);

  async function fetchData() {
    const res = await fetch("https://robots-and-pencils-john.herokuapp.com/getLaunches");
    res
      .json()
      .then(res => setLaunches(res))
      // .then(res => setPlanets(res))
      // .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          
        <IconButton aria-label="delete" style={{color: "white"}}>
          <Logo  style={{
            border: "2px solid white",
            borderRadius: "50%",
            fill: "white",
            height: "36px",
            width: "36px",
          }}/>
        </IconButton>

    
  
      <div style={{marginLeft: 'auto'}}>
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
        </div>


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
          {/* {console.log(launches)} */}
          
          {launches.map((row) => (
            <StyledTableRow key={row._id} id="tableRow" >

              <StyledTableCell component="th" scope="row" style={{borderRadius: "20px 0px 0px 20px"}}>
                
                <img src={row.mission_patch_small} alt="patch" style={{height: "36px"}} />
                </StyledTableCell>

              <StyledTableCell align="right" className="tableCell">{row.rocket_name}</StyledTableCell>
              <StyledTableCell align="right">{row.rocket_type}</StyledTableCell>
              <StyledTableCell align="right">
                {moment.unix(row.launch_date_unix).format('l')}
              </StyledTableCell>
              <StyledTableCell align="right">{row.details}</StyledTableCell>
              <StyledTableCell align="right">{row.flight_number}</StyledTableCell>
              <StyledTableCell align="right" 
              style={{borderRadius: "0px 20px 20px 0px"}}
              >
                {row.article_link && <IconButton aria-label="delete" target="_blank" href={row.article_link} style={{color: '#13A2E8'}}>
                  <LinkIcon />
                </IconButton>}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
