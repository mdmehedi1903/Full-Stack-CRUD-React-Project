import Swal from 'sweetalert2';
import {toast} from 'react-hot-toast'
import { DeleteRequest } from '../../apiRequest/apiRequest';
import { effectChange } from './setChange';

export function DeleteAlert(id){
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
              effectChange();
              
            }else{
              Swal.fire({
                title: "Failed!",
                text: "Your file delete request is failed!",
                icon: "error"
              });
            }




        }
      });
      return true;
} 