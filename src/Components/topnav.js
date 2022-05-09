



import React from "react";
import userimg from '../UI/userimg.png'
import calendar from '../UI/calendarb.png'
import watch from '../UI/clock.png'
import gender from '../UI/gender.png' 

// const datePickerCont={
// backgroundColor: "#E5E5E5" 
// };
// const datePickerContRow1={
//  backgroundColor: "transparent",
// padding:'20px' 
// };
// const datePickerContDiv1={
//  display:'flex',
// justifyContent:"space-evenly"
// };
// const datePickerContDiv2={ 
// display:'flex',
// flexDirection:'column'
// };
// const datePickerContDiv2Img={
//  marginLeft:'20px',
// marginBottom:'15px'
// };
// const datePickerContDiv2Sel={
//  backgroundColor: "transparent",
// border:'0px'
// };
// const datePickerContDiv3={
//  display:'flex',
// flexDirection:'column'
// };
// const datePickerContDiv3Img={
//  marginLeft:'20px',
// marginBottom:'15px'
// };
// const datePickerContDiv3Sel={
//  backgroundColor: "transparent",
// border:'0px'
// };
// const datePickerContDiv4Sel={
//  backgroundColor: "transparent",
// border:'0px',
// paddingLeft:'20px'
// };
// const tablecHead={
// backgroundColor:"#436FB2",
// color:'white',
// borderRadius:'10px'
// };
// const tablecTab={
// backgroundColor:'white' ,
// padding:'10px'
// };
// const CardCoach1={ 
// width: '15rem',
// borderRadius: "4%"
// };
// const CardCoachP1={
// fontWeight:'bold'
// };
// const CardCoachP2={
// fontWeight:'lighter'
// };



// const topnavCont={
// background:"transparent"
// };
// const topnavContDiv1={
// display:'flex',
// float:'right',
// justifyContent:"flex-end"
// };
// const topnavContDiv2={
// marginRight:'5px'
// };
// const topnavContDiv2P1={
// fontSize:'18px',
// fontWeight:'bolder'
// };
// const topnavContDiv2P2={
// fontSize:'18px',
// fontWeight:'normal',
//  marginTop:'-20px'};



// class Topnav extends React.Component{
// render(){
//     return(

//     <Container style={topnavCont}>
//     <Row style={topnavCont}>
//         <div className="userdiv" style={topnavContDiv1}>
//             <div className="nametag" style={topnavContDiv2}>
//                 <p style={topnavContDiv2P1}>Welcome Back</p>
//                 <p style={topnavContDiv2P2}>&nbsp;&nbsp;&nbsp;&nbsp;David Roy</p>
//             </div>
//             <div className="image"><img src={userimg} /></div>
//         </div>
//     </Row>
// </Container>
//     );
// }
// }
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

// class DatePicker extends React.Component{
//     render(){
//     return(
//         <Container style={datePickerCont}>
//             <Row style={datePickerContRow1}>
//                 <div className="maindiv" style={datePickerContDiv1}>
//                     <div className="calendar" style={datePickerContDiv2}>
                 
//                  <img src={calendar} width='34px'style={datePickerContDiv2Img}/>
//                  <select style={datePickerContDiv2Sel}>
//     <option value="0">02/01/2020</option>
//     <option value="1">02/02/2020</option>
//     <option value="2">02/03/2020</option>
//     </select>

//                  {/* <br/> <br/> */}
                
                         
//                     </div>
//                     <div className="time" style={datePickerContDiv3}>
                          
//                  <img src={watch} width='34px' style={datePickerContDiv3Img}/>
//                  <select style={datePickerContDiv3Sel}>
//     <option value="0">10.30-11.00 AM</option>
//     <option value="1">11.30-12.00 AM</option>
//     <option value="2">12.30-01.00 PM</option>
//     </select>

//                     </div>
//                     <div className="players" style={datePickerContDiv3}>
                    
//                  <img src={gender} width='34px' style={datePickerContDiv3Img}/>
//                  <select style={datePickerContDiv4Sel}>
//     <option value="0">8</option>
//     <option value="1">9</option>
//     <option value="2">10</option>
//     </select>



//                     </div>
//                 </div>
//             </Row>
//         </Container>
//     );
// }
// }

class Footer extends React.Component{
    render(){
    return(
        <div>
        <center><p className="paraLine">@ 2022 TOTALHEALTHCHECK</p></center>
      </div>
    );
}
}

// export{ Topnav,Tablec,Footer,DatePicker,Shortcont,Cardgraph}
export {Footer}