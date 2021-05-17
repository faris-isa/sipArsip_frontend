import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CDataTable,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Loadwait from '../../.components/Loading';

const fields = [
    // {key: '#', _style: {width: '5%'} },
    { key: 'nama_pembeli', _style: { width: '50%'}, sorter: true },
    { key: 'status', _style: { width: '30 %'} },
    {key: 'action', sorter: false},
];


const TableOffers = (props) => {
  const { offers, load, info, statusinfo, loadstatus, infodata } = props;

  // const cleanTheDate = (dateStr) => {
  //   return dateStr.replace(/T/, ' ').replace(/\..+/, '');
  // }

  var d = new Date(infodata.created_at);
  var e = new Date(infodata.updated_at);

  const status = (status) => {
    if (status === "accept"){
      return "Disetujui";
    } else if (status === "decline"){
      return "Ditolak";
    } else {
      return "Belum Diputuskan";
    }
  }

  const dibeli = (status) => {
    if (status === "not decided"){
      return "-";
    }  else {
      return e.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    }
  }

  const daftarBeli = (status) => {
    if (status === "accept"){
      var f = new Date(infodata.purchase[0].pivot.created_at);
      return f.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
    }  else {
      return '-';
    }
  }

  const terbeli = (status) => {
    if (status === "accept"){
      return infodata.purchase[0].pivot.purchased_at;
    }  else {
      return '-';
    }
  }

  const statusTransaksi = (status) => {
    if (status === "accept"){
      if( infodata.purchase[0].pivot.status === "pembelian"){
        return "Pembelian";
      } else {
        return "Selesai - " + infodata.purchase[0].pivot.done_at;
      }
    } else if (status === "not decided"){
      return "Penawaran";
    } else {
      return "Selesai"
    }
  }

  let data = {
    "Nama pelanggan" : infodata.nama_pembeli,
    "Penawaran dibuat" : d.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
    "Penawaran disetujui / ditolak" :  status(infodata.status)+ ' - ' + dibeli(infodata.status),
    "Pembelian produk didaftarkan" : daftarBeli(infodata.status),
    "Produk didaftarkan" : terbeli(infodata.status),
    "Status Transaksi" : statusTransaksi(infodata.status)
  }

  const details = data ? Object.entries(data) : <></>

  return (
    <>
        <CDataTable
            items={offers}
            fields={fields}
            loading={load}
            striped
            sorter
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                // '#'   :
                // (item) =>(
                //     <td>
                //         {item.id}
                //     </td>
                // ),
            'action':
                (item)=>(
                <td>
                    <Link to={`/penawaran/show/${item.id}`}>
                      <CButton color="info" className="mr-1" size="sm">
                          <CIcon name="cil-info"/>
                          <h6>info</h6>
                          {/* {item.id} */}
                      </CButton>
                    </Link>
                    <CButton color="success" className="mr-1" size="sm" onClick={(e) => info(item.id)}>
                          <CIcon name="cil-info"/>
                          <h6>Status Info</h6>
                      </CButton>
                </td>
                )

            }}
        />
        <CModal size="xl" show={statusinfo} onClose={info}>
                    <CModalHeader>Status Penawaran</CModalHeader>
                    <CModalBody>
                    { (loadstatus === true) ? <Loadwait /> :
                      <table>
                        {
                          details.map(([key, value], index) => {
                            return (
                              <tbody  key={index.toString()}>
                                <tr>
                                  <td>{`${key}`}</td>
                                  <td> : </td>
                                  <td><strong>{value}</strong></td>
                                </tr>
                              </tbody>
                            )
                          })
                        }
                        </table>
                    }
                    </CModalBody>
                    <CModalFooter>
                      <CButton
                        color="secondary"
                        onClick={info}
                      >Cancel</CButton>
                    </CModalFooter>
                  </CModal>
    </>
  )
}

export default TableOffers;
