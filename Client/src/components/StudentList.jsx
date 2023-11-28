import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Table, Container, Spinner, Card, Button } from 'react-bootstrap';
import { DeleteRequest, ListStudent } from '../apiRequest/apiRequest';
import Loader from './Loader';
import {Toaster, toast} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';
const StudentList = () => { 
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [change, setChange] = useState(0);



    useEffect(()=>{ 
        (async ()=>{
            let res = await ListStudent();
            setData(res);
        })()
    },[change])
      
    const onDelete = async(id) => {
        // let res = await DeleteRequest(id);
        // if(res){
        //     toast.success("Student Deleted!")
        //     setChange(new Date().getTime())
        // }else{
        //     toast.error("Delete Failed!")
        // }



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
    
     
                let res = await DeleteRequest(id);
                if(res){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  }); 
                  setChange(new Date().getTime())
                  
                }else{
                  Swal.fire({
                    title: "Failed!",
                    text: "Your file delete request is failed!",
                    icon: "error"
                  });
                }
            }
          });


    }


    if (data.length === 0) {
        return (
            <>
                {/* <Loader /> */}
                <Container><br/>
                <h3 className='bg-success text-center text-white p-3'> Loading &nbsp;


                <div class="spinner-grow text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

                </h3>
                    <br/>
                    <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Nationality</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Admission Date</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-11"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-9"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-10"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-8"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-11"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-9"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-10"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="10">
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-8"></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>

                    </Table>
                </Container>
            </>
        );
    }
    
    else{     
        return (
            <Container><br/>
            <h3 className='bg-success text-center text-white p-3'>Total Student: {data.length} </h3><br/>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Nationality</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Admission Date</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{item['firstName']} {item['lastName']}</td>
                                        <td>{item['gender']}</td>
                                        <td>{item['dateOfBirth']}</td>
                                        <td>{item['nationality']}</td>
                                        <td>{item['address']}</td>
                                        <td>{item['email']}</td>
                                        <td>{item['phone']}</td>
                                        <td>{item['admissionDate']}</td>
                                        <td>{item['courses']}</td>
                                        <td>
                                            <Link to={"/update?id="+item['_id']} className='btn btn-warning me-2'>
                                                <i className="bi bi-pencil"></i> 
                                            </Link>
                                            <button onClick={()=>{onDelete(item['_id'])}} className='btn btn-danger'>
                                                <i className="bi bi-trash"></i> 
                                            </button>
                                        </td>

                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <Toaster position="bottom-center"/>
                </Container>
        );
    }
};

export default StudentList;