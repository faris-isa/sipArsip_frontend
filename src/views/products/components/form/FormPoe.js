import React, { 
    // useState 
    } from 'react';
import {
    // BrowserRouter as Router,
    // Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
import {
  CCol,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CSelect,
  CSwitch
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import LabelForm from '../../../.components/form/LabelForm';
// import { DocsLink } from 'src/reusable'

const FormPoe = () => {
//   const [collapsed, setCollapsed] = useState(true)
//   const [showElements, setShowElements] = useState(true)

  return (
    <>
            <CFormGroup row>
            
            <LabelForm md="3" htmlfor="text-input" name="Model Produk" />

            <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Masukkan Model Produk" />
                <CFormText>Isian model produk</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            
            <LabelForm md="3" htmlfor="textarea-input" name="Deskripsi Produk" />
            
            <CCol xs="12" md="9">
            <CTextarea 
                name="textarea-input" 
                id="textarea-input" 
                rows="9"
                placeholder="Deskripsi produk..." 
            />
            </CCol>
        </CFormGroup>
        <CFormGroup row>
            <CLabel col md="3" htmlFor="file-input">Gambar Produk</CLabel>
            <CCol xs="12" md="9">
            <CInputFile id="file-input" name="file-input"/>
            </CCol>
        </CFormGroup>
        
        <CFormGroup row>

            <LabelForm md="3" htmlfor="price-input" name="Harga (Satuan)"/>

            <CCol xs="12" md="9">
            <CInput type="text" id="price-input" name="price-input" placeholder="Masukkan Harga"/>
            <CFormText>Isian harga (satuan ribu)</CFormText>
            </CCol>
        </CFormGroup>
    </>
  )
}

export default FormPoe;
