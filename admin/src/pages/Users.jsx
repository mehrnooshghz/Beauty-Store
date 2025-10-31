import { DataGrid } from '@mui/x-data-grid';
import { FaTrash} from 'react-icons/fa';
import { userRequest } from "../requestMethods";
import { useEffect, useState } from 'react';

const Users = () => {

  const columns =[
    {field:"_id", headerName:"ID", width: 90},
    {field:"name", headerName:"Name", width: 150},
    {field:"email", headerName:"Email", width: 200},
    {field:"phone", headerName:"Phone", width: 150},
    {field:"role", headerName:"Role", width: 130},
    {
      field: "delete",
      headerName: "Delete",
      with: 150,
      renderCell: () => {
        return (
          <>
           <FaTrash className="text-red-500 cursor-pointer m-2" />
           </>
        );
      },
    },
  ];

  const [users, setUsers] = useState({});

  useEffect(() =>{
    const getUsers = async() =>{
      try {

        const res = await userRequest.get("/users");
        setUsers(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()

  },[])
  
  const data = [
  {_id: "u001", name: "Charlie Brown", email: "chalie@example.com", phone: "123-456-789", role:"User"},
  {_id: "u002", name: "David Clack", email: "david@example.com", phone: "345-1123-890", role:"Admin"},
  {_id: "u003", name: "Eve Stone", email: "eve@example.com", phone: "234-567-098", role: "User"},
  {_id: "u004", name: "Franco Wilson", email: "franco@example.com", phone: "234-567-098", role:"Admin"},
  {_id: "u005", name: "Grace Lee", email: "grace@example.com", phone: "890-765-345", role:"User"},
  {_id: "u006", name: "Alice Johnson", email: "alice@example.com", phone: "123-789-043", role:"Admin"},
  {_id: "u007", name: "Bob Smith", email: "bob@example.com", phone: "112-765-125", role: "User"},
  {_id: "u008", name: "Henry Kim", email: "henty@example.com", phone: "7654-134-865", role:"Admin"},

];

  return (
    <div>
       <div className='p-5 w-[70vw]'>
            <div className='flex items-center justify-between m-[30px]'>
              <h1 className='m-5 text-[20px]'>All Users</h1>
            </div>
      
            <div className='m-[30px]'>
               <DataGrid getRowId={(row) => row._id}  rows={users} checkboxSelection columns={columns} />
      
            </div>
      
      
          </div>
    </div>
  )
}

export default Users