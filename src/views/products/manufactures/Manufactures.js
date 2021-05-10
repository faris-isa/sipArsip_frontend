import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import Table from './components/Table';
import axiosConfig from "../../../api/axios";
import CardHeader from '../../.components/CardHeader'
import Swal from 'sweetalert2';


const Manufactures = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    let config = {
      headers : { Authorization: `Bearer ${token}` }
    };
    const getData = async () => {
      try {
        await axiosConfig.get('/manufactures', config)
        .then((res) => {
          setData(res.data);
          setLoad(false);
        })
      } catch(error) {

      }
    };

    getData()
  }, [setData, setLoad]);

  const handleDelete = (id) => {
    let headers = {
      authorization: `Bearer ${token}`,
    };
    const getAlert = () => {
      Swal.fire({
            title: 'Yakin menghapus tipe produk ini ?',
            text: "Perubahan yang terjadi tidak dapat diubah kembali",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus tipe ini.'
          }).then((result) => {
            if (result.isConfirmed) {
              try {
                setLoad(true);
                axiosConfig.delete(`/manufactures/${id}`, headers)
                .then(res => {
                  if (res.status === 200){
                    Swal.fire({
                      title: 'Sukses',
                      text: 'Data berhasil dihapus!',
                      icon: 'success',
                      timer: 2000,
                    });
                    let filtered = data.reduce((filter,data) =>
                    ( data.id !== id && filter.push(data) ,filter ),[]);
                    setData(filtered);
                    setLoad(false)
                  }
                })
              } catch(error) {
                console.log(error)
              }
            }
          }
          )
      };
      getAlert();
  }


  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CardHeader title="Daftar Manufaktur Produk" type="tambah" link="/produk/manufaktur/tambah"/>
          <CCardBody>
          <Table data={data} load={load} del={handleDelete}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Manufactures;
