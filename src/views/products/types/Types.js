import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import Table from './components/Table';
import axiosConfig from "../../api/axios";
import CardHeader from '../../.components/CardHeader'
import Swal from 'sweetalert2';


const Types = () => {
  const [tipedata, setTipedata] = useState([]);
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let headers = {
    authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const types = await axiosConfig.get('/types', headers)
        setTipedata(types.data);
        setLoad(false);
      } catch(error) {

      }
    };

    getData()
  }, [setTipedata]);

  const handleDelete = (id) => {
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
                axiosConfig.delete(`/users/${id}`, headers)
                .then(res => {
                  if (res.status === 200){
                    Swal.fire({
                      title: 'Sukses',
                      text: 'Data berhasil dihapus!',
                      icon: 'success',
                      timer: 2000,
                    });
                    let filtered = usersdata.reduce((filter,data) =>
                    ( data.id !== id && filter.push(data) ,filter ),[]);
                    setUsersdata(filtered);
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
          // setModal(true)
          // getOffers();
      getAlert();

  }


  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CardHeader title="Daftar Tipe Produk" type="tambah" link="/tipe_produk/tambah"/>
          <CCardBody>
          <Table users={tipedata} load={load} del={handleDelete}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Types;
