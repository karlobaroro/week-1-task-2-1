import React, { Component } from 'react';
import data from './data.js';

class App extends Component {
  listHover = (userId) => {
    const findEmployee = data.employees.filter(empInfo => empInfo.userId === userId);
    const empInfo = findEmployee[0];

    alert("Employee Info \nName: " + empInfo.preferredFullName + "\nJob Title Name: " + empInfo.jobTitleName + "\nEmployee Code: " + empInfo.employeeCode + "\nRegion: " + empInfo.region + "\nPhone number: " + empInfo.phoneNumber + "\nEmail Address: " + empInfo.emailAddress + "\nAge: " + empInfo.age + "\nDate of Birth: " + empInfo.dateOfBirth + "\nSalary: " + empInfo.salary + "\nDepartment: " + empInfo.department);
  }

  listData = data.employees.map(employeeInfo => {
    return (
      <ul key={employeeInfo.userId} onMouseOver={() => {this.listHover(employeeInfo.userId);}} style={{backgroundColor:"#b5e7a0",marginLeft:"auto",marginRight:"auto",width:"20%",padding:"10px",border:"0px solid black",borderRadius:"5px",fontFamily:"Cascadia Code"}}>
        <li style={{ listStyleType: "none" }}><img src={employeeInfo.image} style={{width:"80%"}} /></li>
        <li style={{ listStyleType: "none" }}>Name: {employeeInfo.preferredFullName}</li>
        <li style={{ listStyleType: "none" }}>Designation: {employeeInfo.jobTitleName}</li>
      </ul>
    )
  });

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <p style={{fontSize:"30px",fontFamily:"Segoe UI Black",paddingBottom:"5px",borderBottom:"2px solid #878f99"}}>Employees</p>
        {this.listData}
      </div>
    );
  }
}

export default App;