import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CCard, CCardBody } from '@coreui/react'

import axiosConfig from "../../api/axios";
import Load from '../.components/Loading';
import Header from '../.components/CardHeader';
import FormProducts from './components/Form';

const EditProduct = ({match}) => {
  const id = match.params.id;
  const [types, setTypes] = useState("");
  const [manufactures, setManufactures] = useState("");
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState("");
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };
  const history = useHistory();

  const [temp, setTemp] = useState("")

  useEffect(() => {
    const getManufactures = async () => {
      try {
        await axiosConfig.get('/manufactures', config).then((res) => {
          setManufactures(res.data);
        })
        await axiosConfig.get('/types', config).then((res) => {
          setTypes(res.data);
        })
        await axiosConfig.get(`/products/${id}`, config).then((res) => {
          setTemp(res.data);
          setLoad(false);
        })
      } catch(error) {

      }
    };

    getManufactures();
  }, [setManufactures, setTypes]);

  const handleForm = (value) => {
    setValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    const fd = new FormData();
    fd.append('model_produk', value.model_produk);
    fd.append('product_type', value.product_type);
    fd.append('status', value.status);
    fd.append('harga_satuan', value.harga_satuan);
    fd.append('foto_produk', value.foto_produk);
    fd.append('product_manufacture', value.product_manufacture);
    fd.append('spesifikasi', value.spesifikasi);

    try {
      await axiosConfig.post(`/products/${id}?_method=PATCH`, fd, config)
      // await axiosConfig.patch(`/products/${id}`, fd, headers)
      .then(res => {
        const data = res.data;
        if (data.status === 201){
          setLoad(false);
          Swal.fire({
            title: 'Sukses',
            text: 'Data berhasil ditambahksan!',
            icon: 'success',
            timer: 1500,
          });
          history.push('/produk');
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
    } catch {

    }
  }

    return (
        <>
          <CCard>
            <Header title="Tambah Produk" type="kembali" link="/produk" />
            <CCardBody>
              { (load === true) ? <Load /> :
                <FormProducts temp={temp} form={handleForm} type={types} manufacture={manufactures} submit={handleSubmit}/>
              }
            </CCardBody>
          </CCard>
        </>
    )
}

export default EditProduct;
