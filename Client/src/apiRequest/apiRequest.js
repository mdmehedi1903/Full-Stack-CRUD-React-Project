export async function ListStudent(){
    try {
        let res = await fetch("http://localhost:5050/api/v1/ReadStudent");
        let JSONData = await res.json();
        return JSONData['data']
    }catch(e){
        return [];
    }
}

export async function listStudentByID(id) {
    try {
        let res = await fetch("http://localhost:5050/api/v1/ReadStudentByID/"+id);
        let JSONData = await res.json();
        return JSONData['data'][0]
    }catch(e){
        return[];
    }
}


export async function CreateStudent(postBody){
    try {
        let res = await axios.post("http://localhost:5050/api/v1/CreateStudent", postBody);
        if(res.status===200){
            return true;
        }else{
            return false;
        }
        
    }catch(e){
        return false;
    }
}


export async function UpdateStudent(postBody, id){
    try {
        let res = await axios.post("http://localhost:5050/api/v1/UpdateStudent/"+id, postBody);
        if(res.status===200){
            return true;
        }else{
            return false;
        }
        
    }catch(e){
        return false;
    }
}


import axios from 'axios';

export async function DeleteRequest(id) {
  try {
    const res = await axios.delete(`http://localhost:5050/api/v1/DeleteStudent/${id}`);
    if (res.data.status === "Success") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
