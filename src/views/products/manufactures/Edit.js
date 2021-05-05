import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CCard, CCardBody, CForm, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axiosConfig from "../../../api/axios";
import Form from './components/Form';
import Header from '../../.components/CardHeader';
import Load from '../../.components/Loading';


const Edit = ({match}) => {

  const id = match.params.id;
  const [data, setData] = useState();
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(true);
  const history = useHistory();


  useEffect(() => {
    const getType = async () => {
      try {
        await axiosConfig.get(`/manufactures/${id}`).then(res => {
          setData(res.data);
          setLoad(false)
        })
      } catch(error) {

      }
    }
    getType()
  }, [setData]);

  const handleForm = (value) => {
    setValue(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    // const fd = new FormData();
    // fd.append('name', value.model_produk);
    // fd.append('code_name', value.code_name);
    // fd.append('satuan', value.satuan);
    // fd.append('code_satuan', value.code_satuan);


    const token = JSON.parse(sessionStorage.getItem("token"));
    let config = {
      headers : { authorization: `Bearer ${token}` }
    };
    try {
      await axiosConfig.patch(`/manufactures/${id}`, value, config)
      .then(res => {
        const data = res.data;
        if (data.status === 201){
          setLoad(false);
          Swal.fire({
            title: 'Sukses',
            text: 'Data berhasil diubah!',
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
      <Header title="Ubah Tipe Produk" type="kembali" link="/produk/manufaktur" />
      <CCardBody>
        { (load === true) ? <Load /> :
            <Form value={handleForm} temp={data} submit={handleSubmit}/>
        }
      </CCardBody>
    </CCard>
    )
}

export default Edit;
