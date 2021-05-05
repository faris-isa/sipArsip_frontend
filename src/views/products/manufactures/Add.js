import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CCard, CCardBody } from '@coreui/react'
import axiosConfig from "../../../api/axios";
import Form from './components/Form';
import Header from '../../.components/CardHeader';
import Load from '../../.components/Loading';


const Add = () => {
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(false);
  const history = useHistory();
  let data = {
    name: "",
    code_name: "" ,
  }

  useEffect(() => {

  }, []);

  const handleForm = (value) => {
    setValue(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const token = JSON.parse(sessionStorage.getItem("token"));
    let config = {
      headers : { authorization: `Bearer ${token}` }
    };
    try {
      await axiosConfig.post('/manufactures', value, config)
      .then(res => {
        const data = res.data;
        if (data.status === 201){
          setLoad(false);
          Swal.fire({
            title: 'Sukses',
            text: 'Data berhasil ditambahkan!',
            icon: 'success',
            timer: 1500,
          });
          history.push('/produk/manufaktur');
        } else if (data.status === 500){
          setLoad(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Periksa kembali kolom form !',
            icon: 'warning',
            timer: 1500,
          });
        } else if (data.status === 404){
          setLoad(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Error',
            icon: 'error',
            timer: 1500,
          });
        }
      })
    } catch (error) {
      console.error(error);
    }
  }


  return (
  <CCard>
    <Header title="Menambahkan Manufaktur Produk" type="kembali" link="/produk/manufaktur" />
    <CCardBody>
      { (load === true) ? <Load /> :
        // <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => {handleSubmit(e)}}>
          <Form value={handleForm} temp={data} submit={handleSubmit}/>
        //   {/* <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
        // </CForm> */}
      }
    </CCardBody>
  </CCard>
  )
}

export default Add;
