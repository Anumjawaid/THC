



import React from "react";
import userimg from '../UI/userimg.png'
import calendar from '../UI/calendarb.png'
import watch from '../UI/clock.png'
import gender from '../UI/gender.png' 
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import { fontSize } from "@mui/system";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const datePickerCont={
backgroundColor: "#E5E5E5" 
};
const datePickerContRow1={
 backgroundColor: "transparent",
padding:'20px' 
};
const datePickerContDiv1={
 display:'flex',
justifyContent:"space-evenly"
};
const datePickerContDiv2={ 
display:'flex',
flexDirection:'column'
};
const datePickerContDiv2Img={
 marginLeft:'20px',
marginBottom:'15px'
};
const datePickerContDiv2Sel={
 backgroundColor: "transparent",
border:'0px'
};
const datePickerContDiv3={
 display:'flex',
flexDirection:'column'
};
const datePickerContDiv3Img={
 marginLeft:'20px',
marginBottom:'15px'
};
const datePickerContDiv3Sel={
 backgroundColor: "transparent",
border:'0px'
};
const datePickerContDiv4Sel={
 backgroundColor: "transparent",
border:'0px',
paddingLeft:'20px'
};
const tablecHead={
backgroundColor:"#436FB2",
color:'white',
borderRadius:'10px'
};
const tablecTab={
backgroundColor:'white' ,
padding:'10px'
};
const CardCoach1={ 
width: '15rem',
borderRadius: "4%"
};
const CardCoachP1={
fontWeight:'bold'
};
const CardCoachP2={
fontWeight:'lighter'
};



const topnavCont={
background:"transparent",
marginBottom:'90px'
};
const topnavContDiv1={
display:'flex',
float:'right',
justifyContent:"flex-end"
};
const topnavContDiv2={
marginRight:'5px'
};
const topnavContDiv2P1={
fontSize:'18px',
fontWeight:'bolder'
};
const topnavContDiv2P2={
fontSize:'18px',
fontWeight:'normal',
 marginTop:'-20px'};


function ButtonStyle(props){
  console.log(props,"props")
  let fontSize
  if(props.fontSize == null){
    // ,fontSize:"24px"
    fontSize="24px"
  }
  else{
    fontSize=props.fontSize
    console.log("N ELSE ",fontSize)
  }
  return(
    <button className="buttonlogin" type="submit" style={{backgroundColor: "#144B9F",width: props.width,height: props.height,borderRadius: "8px",color:'white',fontSize:fontSize}}>{props.text}</button>

  )
}

class Topnav extends React.Component{
render(){
    return(

    <Grid style={topnavCont}>
        <div className="userdiv" style={topnavContDiv1}>
            <div className="nametag" style={topnavContDiv2}>
                <p style={topnavContDiv2P1}>Welcome Back</p>
                <p style={topnavContDiv2P2}>&nbsp;&nbsp;&nbsp;&nbsp;David Roy</p>
            </div>
            <div className="image"><img src={userimg} /></div>
        </div>
    </Grid>
    );
}
}
// class Shortcont extends React.Component{
//   constructor(props){
//     super()
//       console.log(this.props);
//   }
// render(){
//   let color=this.props.color
//   const shortDiv={
// backgroundColor: color,
//  borderRadius: "5px"
// };

  
//   return(
//     <>
//               <Col lg="3">
//                 <div style={shortDiv}>
//                  <center><p className="text-light pt-3" ><b>{this.props.head}</b></p></center>  
//                  <center>  <p className="text-light pb-3" >{this.props.title}</p></center>  
//                 </div>
//               </Col>
//     </>

//   );
// }
// }

// class Cardgraph extends React.Component{
//   constructor(props){
//     super()
//       console.log(this.props);
//   }
//  render(){
//   return(
//     <>
//     <Card style={ CardCoach1}>
//     <Card.Img variant="top" src={this.props.img} />
//     <Card.Body>
//       <Card.Text>
//        <p style={CardCoachP1}>{this.props.head}</p>
//        <p style={CardCoachP2}>{this.props.title}</p>
//       </Card.Text>
//     </Card.Body>
//   </Card>
//     </>

//   );
// }
// }
// class cardcoach extends React.Component{
//   constructor(props){
//     super()
//       console.log(this.props);
//   }
// render(){
//   return(
//     <>
//      <Card style={CardCoach1}>
//     <Card.Img variant="top" src={this.props.img} />
//     <Card.Body>
//       <Card.Text>
//        <p style={CardCoachP1}>{this.props.head}</p>
//        <p style={CardCoachP2}>{this.props.title}</p>
//       </Card.Text>
//     </Card.Body>
//   </Card>

//     </>
//   );
// }
// }
// class Tablec extends React.Component{
//   constructor(props){
//     super()
//       console.log(this.props);
//   }
//     render(){
//       let data=this.props.data
//     return(
//         <>
//         <table className="table table-borderless table-condensed table-hover" style={tablecTab}>
//   <thead style={tablecHead}>
//     <tr>
//       {data.th.map((v,i)=>{
//         return <th>{v}</th>
//       })}
//     </tr>
   
//   </thead>
//   <tbody>
//     {data.td.map((v,i)=>{
//       return<tr>
//         {v.map((s,i)=>{
//           return<td>{s}</td>
//         })}
//       </tr>
//     })}
  
//   </tbody>
// </table>
         
//         </>
//     );
// }
// }

class DatePicker extends React.Component{
    render(){
    return(
        <Container style={datePickerCont}>
            <Grid style={datePickerContRow1}>
                <div className="maindiv" style={datePickerContDiv1}>
                    <div className="calendar" style={datePickerContDiv2}>
                 
                 <img src={calendar} width='34px'style={datePickerContDiv2Img}/>
                 <select style={datePickerContDiv2Sel}>
    <option value="0">02/01/2020</option>
    <option value="1">02/02/2020</option>
    <option value="2">02/03/2020</option>
    </select>

                 {/* <br/> <br/> */}
                
                         
                    </div>
                    <div className="time" style={datePickerContDiv3}>
                          
                 <img src={watch} width='34px' style={datePickerContDiv3Img}/>
                 <select style={datePickerContDiv3Sel}>
    <option value="0">10.30-11.00 AM</option>
    <option value="1">11.30-12.00 AM</option>
    <option value="2">12.30-01.00 PM</option>
    </select>

                    </div>
                    <div className="players" style={datePickerContDiv3}>
                    
                 <img src={gender} width='34px' style={datePickerContDiv3Img}/>
                 <select style={datePickerContDiv4Sel}>
    <option value="0">8</option>
    <option value="1">9</option>
    <option value="2">10</option>
    </select>



                    </div>
                </div>
            </Grid>
        </Container>
    );
}
}

class Footer extends React.Component{
    render(){
    return(
        <div>
        <center><p className="paraLine">@ 2022 TOTALHEALTHCHECK</p></center>
      </div>
    );
}
}



export default function BasicTable(props) {
  console.log(props,"Table")
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  let tablerow=["Dessert","Desserts","Desserte4","Dessert5","Dessert7"]
  let tabledata=[{'tab1':['a','b','c','d']},
  {'tab2':['a','b','c','d']},
  {'tab3':['a','b','c','d']},
  {'tab4':['a','b','c','d']}
]
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,color:'#FFFFFF' }} aria-label="simple table">
        <TableHead style={{background: '#436FB2', color:'white'}}>
          <TableRow>
            {tablerow.map((value)=>(
                   <TableCell style={{color:'white',fontWeight:'bold'}}>{value}</TableCell>
            ))
          }
           
          </TableRow>
        </TableHead>
        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// export{ Topnav,Tablec,Footer,DatePicker,Shortcont,Cardgraph}
export {Topnav,Footer,ButtonStyle,DatePicker}