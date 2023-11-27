import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { CreateStudent, UpdateStudent, listStudentByID } from '../apiRequest/apiRequest';
import { Link, useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: ""
  });

  let [updateId, setUpdateId] = useState(null);

  useEffect(()=>{
          

      (async()=> {
        const urlParams = new URLSearchParams(window.location.search)
        const id = urlParams.get('id');
        setUpdateId(id)

        if(id!==null){
          await fillOldData(id)
        }
      })()

  },[])

  const fillOldData = async (id)=> {
    let res = await listStudentByID(id);
    setFormValue({
      firstName: res['firstName'],
      lastName: res['lastName'],
      gender: res['gender'],
      dateOfBirth: res['dateOfBirth'],
      nationality: res['nationality'],
      address: res['address'],
      email: res['email'],
      phone: res['phone'],
      admissionDate: res['admissionDate'],
      courses: res['courses']
    })
  }

  const inputOnChange = (key, prop) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [key]: prop
    }));
  };

  const navigate = useNavigate();

  const SaveForm = async () => {
    if (formValue.firstName.length === 0) {
      toast.error("First Name Required!");
    } else if (formValue.lastName.length === 0) {
      toast.error("Last Name Required!");
    } else if (formValue.gender.length === 0) {
      toast.error("Gender Required!");
    } else if (formValue.dateOfBirth.length === 0) {
      toast.error("Birth Date Required!");
    } else if (formValue.nationality.length === 0) {
      toast.error("Nationality Required!");
    } else if (formValue.address.length === 0) {
      toast.error("Address Required!");
    } else if (formValue.email.length === 0) {
      toast.error("Email Required!");
    } else if (formValue.phone.length === 0) {
      toast.error("Phone Required!");
    } else if (formValue.admissionDate.length === 0) {
      toast.error("Admission Date Required!");
    } else if (formValue.courses.length === 0) {
      toast.error("Courses Required!");
    } else {
      if(updateId===null){
        let res = await CreateStudent(formValue);
        if (res) {
          toast.success("Create Request Completed!");
          // navigate('/');
        } else {
          toast.error("Create Request Fail!");
        }
      }else{
        let res = await UpdateStudent(formValue, updateId);
        if (res) {
          toast.success("Update Request Completed!");
          // navigate('/');
        } else {
          toast.error("Update Request Fail!");
        }
      }
      

    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4 mt-5'>
          <input
            value={formValue.firstName}
            onChange={(e) => inputOnChange('firstName', e.target.value)}
            type='text'
            className='form-control'
            placeholder='First Name'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.lastName}
            onChange={(e) => inputOnChange('lastName', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Last Name'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.gender}
            onChange={(e) => inputOnChange('gender', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Gender'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.dateOfBirth}
            onChange={(e) => inputOnChange('dateOfBirth', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Birth Date'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.nationality}
            onChange={(e) => inputOnChange('nationality', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Nationality'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.address}
            onChange={(e) => inputOnChange('address', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Nationality'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.email}
            onChange={(e) => inputOnChange('email', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Email'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.phone}
            onChange={(e) => inputOnChange('phone', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Phone'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.admissionDate}
            onChange={(e) => inputOnChange('admissionDate', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Admission Date'
          />
        </div>

        <div className='col-md-4 mt-5'>
          <input
            value={formValue.courses}
            onChange={(e) => inputOnChange('courses', e.target.value)}
            type='text'
            className='form-control'
            placeholder='Course'
          />
        </div>


        <div className='col-md-4 mt-5'>
          <label className='form-label'>Save Change</label><br/>
          <button onClick={SaveForm} className='btn btn-primary w-100'>Submit</button>
          <br/>
          <br/>
        </div>
      </div>
      <Toaster position="bottom-center"/>
    </div>
  );
};

export default StudentForm;
