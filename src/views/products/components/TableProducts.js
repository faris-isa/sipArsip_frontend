import React, {useState} from 'react';
import {
  CButton,
  CDataTable,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import Swal from 'sweetalert2'

import usersData from '../../users/UsersData'

const MySwal = require('sweetalert2')
// const MySwal = withReactContent(Swal)

const fields = [ 
    {key: '#', _style: {width: '5%'} },
    { key: 'name', _style: { width: '50%'} },
    //'registered',
    //{ key: 'role', _style: { width: '20%'} },
    'action',
];


const TableProducts = () => {
    const [alert, setAlert] = useState('gagal');
    
    const handleDeleteOpen = () => {
        const getAlert = () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
                // if (result) {
                //     $.ajax({
                //         type: "POST",
                //         url: '/Common/ComposeUpdateDetailsEmail',
                //         data: { ReplyType: 'CleanUpdateDetails', Id: Id },
                //         success: function (data) {
                //             swal('User has been sent an email to Update their Details.')
                //         }
                //     });
                // }
              })
          };
          setAlert(getAlert());
        //   event.preventDefault();
        }
        // const handleDeleteClose = event => {
        //     setAlert(false);
        // }
        
  return (
        <CDataTable
            items={usersData}
            fields={fields}
            striped
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                '#'   :
                (item) =>(
                    <td>
                        {item.id+1}
                    </td>
                ),
            'action':
                (item)=>(
                <td>
                    <CButton color="info" className="mr-1" size="sm">
                        <CIcon name="cil-info"/> 
                        <h6>info</h6>
                        {/* {item.id} */}
                    </CButton>
                    <CButton color="warning" className="mr-1" size="sm">
                        <CIcon name="cil-pencil"/> 
                        <h6>edit</h6>
                        {/* {item.id} */}
                    </CButton>
                    <CButton color="danger" className="" size="sm" 
                    onClick={(event) => handleDeleteOpen()}
                    >
                        <CIcon name="cil-trash"/> 
                        <h6>delete</h6>
                        {/* {item.id} */}
                    </CButton>
                </td>
                )

            }}
        />
  )
}

export default TableProducts;
