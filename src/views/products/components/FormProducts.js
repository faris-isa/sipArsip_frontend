import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormGroup,
  CSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LabelForm from '../../.components/form/LabelForm';
import FormNvr from './form/FormNvr';
import FormIpcam from './form/FormIpCam';
import FormPoe from './form/FormPoe';
import Header from '../../.components/CardHeader';
import axiosConfig from '../../../axios';
import Loadwait from '../../.components/Loading';

const FormProducts = (props) => {
  const { data } = props;

  const [type, setType] = useState(0);
  const [dataform, setDataform] = useState(data);
  const history = useHistory();
  const [isloading, setIsloading] = useState(false);

  const handleForm = (value) => {
    setDataform(value);
  }

  const options = [
    { label: "Masukkan Tipe Produk", value: 0},
    { label: "NVR", value: "nvr" },
    { label: "IP Camera", value: "ipcam" },
    { label: "PoE Switch", value: "poeswitch" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    const fd = new FormData();
     if (type === "nvr"){

      fd.append('model_produk', dataform.model_produk);
      fd.append('type_products', type);
      fd.append('harga_satuan', dataform.harga_satuan);
      fd.append('deskripsi_produk', dataform.deskripsi_produk);
      fd.append('foto_produk', dataform.foto_produk);

      fd.append('in_bandwidth', dataform.in_bandwidth);
      fd.append('out_bandwidth', dataform.out_bandwidth);
      fd.append('channel_dicoding', dataform.dec_ch + " - " + dataform.dec_pix);
      fd.append('four_k_support', dataform.four_k_support);
      fd.append('sata_int', dataform.sata_int);
      fd.append('network_int', dataform.net_port + " - " +dataform.net_lenght);
      fd.append('e_sata', dataform.e_sata);
      fd.append('poe_ports', dataform.poe_ports);
      fd.append('hdmi_out', dataform.hdmi_out);

    } else if (type === "ipcam"){

      fd.append('model_produk', dataform.model_produk);
      fd.append('type_products', type);
      fd.append('harga_satuan', dataform.harga_satuan);
      fd.append('deskripsi_produk', dataform.deskripsi_produk);
      fd.append('foto_produk', dataform.foto_produk);

      fd.append('max_resolution', dataform.max_resolution);
      fd.append('form_factor', dataform.form_factor);
      fd.append('protection', dataform.protection);

      const lens_size = dataform.lens_size.join(', ');

      fd.append('lens', lens_size + " - " + dataform.lens_cam);
      fd.append('wdr', dataform.wdr);

    } else if ( type === "poeswitch" ){

      fd.append('model_produk', dataform.model_produk);
      fd.append('type_products', type);
      fd.append('harga_satuan', dataform.harga_satuan);
      fd.append('deskripsi_produk', dataform.deskripsi_produk);
      fd.append('foto_produk', dataform.foto_produk);
    }

    try {
      await axiosConfig.post('/products', fd)
      .then(res => {
        const data = res.data;
        if (data.status === 201){
          setIsloading(false);
          Swal.fire({
            title: 'Sukses',
            text: 'Data berhasil ditambahkan!',
            icon: 'success',
            timer: 1500,
          });
          history.push('/produk');
        } else if (data.status === 500){
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Periksa kembali kolom form !',
            icon: 'warning',
            timer: 1500,
          });
        } else if (data.status === 404){
          setIsloading(false);
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
        <Header title="Menambahkan Produk" type="kembali" link="/produk"/>
        <CCardBody>
        { (isloading === true) ? <Loadwait /> :
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => {handleSubmit(e)}}>
            <CFormGroup row>
                <LabelForm md="3" htmlfor="select" name="Type"/>

                <CCol xs="12" md="9">
                <CSelect custom name="type_products" id="type_products" value={type} onChange={e => setType(e.target.value)}>
                    {
                      options.map((o, i) =>
                      <option key={i} value={o.value}>{o.label}</option> )
                    }
                </CSelect>
                </CCol>
            </CFormGroup>
            { (type === "nvr") ? <FormNvr form={handleForm} temp={data} /> :
            (type === "ipcam") ? <FormIpcam form={handleForm} temp={data} /> :
            (type === "poeswitch") ? <FormPoe form={handleForm} temp={data} /> : <></> }
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CForm>
          }
        </CCardBody>
        </CCard>
    </>
  )
}

export default FormProducts;
