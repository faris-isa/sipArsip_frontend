import React from 'react';
import { Link } from 'react-router-dom'
import {
  CDataTable,
  CButton
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const Table = (props) => {
  const {data, load, del} = props;

  return (
      <>
        <CDataTable
        items={data}
        fields={[
        { key: 'name', _classes: 'font-weight-bold' },
        'code_name',
        'action'
        ]}
        hover
        striped
        loading = {load}
        itemsPerPage={5}
        pagination={{align:"end"}}
        scopedSlots = {{
        'action':
            (item)=>(
            <td>
              <Link to={`/produk/manufaktur/show/${item.id}`}>
                <CButton color="info" className="mr-1" size="sm">
                    <CIcon name="cil-info"/>
                    <h6>info</h6>
                </CButton>
              </Link>
              <Link to={`/produk/manufaktur/edit/${item.id}`}>
                <CButton color="warning" className="mr-1" size="sm">
                    <CIcon name="cil-pencil"/>
                    <h6>edit</h6>
                    {/* {item.id} */}
                </CButton>
              </Link>
                <CButton color="danger" className="" size="sm"
                onClick={(e) => del(item.id)}
                >
                    <CIcon name="cil-trash"/>
                    <h6>delete</h6>
                </CButton>
              {/* </Link> */}
            </td>
            ),
        }}
    />
  </>
  )
}

export default Table;
