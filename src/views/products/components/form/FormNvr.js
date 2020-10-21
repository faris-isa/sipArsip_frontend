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
  CInputRadio,
  CLabel,
  CSelect,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import LabelForm from '../../../.components/form/LabelForm';
// import { DocsLink } from 'src/reusable'

const FormNvr = () => {
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
            
            <LabelForm md="3" htmlfor="text-input" name="Input Bandwidth" />

            <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Input Bandwidth Produk" />
                <CFormText>Isian input bandwidth (satuan Mbps)</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            
            <LabelForm md="3" htmlfor="text-input" name="Output Bandwidth" />

            <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Output Bandwidth Produk" />
                <CFormText>Isian output bandwidth (satuan Mbps)</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="SATA Interface"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="1" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">1</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="2" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">2</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio3" name="inline-radios" value="4" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">4</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Network Interface"/>
            <CCol xs="4" md="4">
                <CSelect custom name="port" id="select">
                    <option value="0">Berapa banyak port RJ45 ?</option>
                    <option value="1rj45">1</option>
                    <option value="2rj45">2</option>
                </CSelect> 
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">RJ45</p>
            </CCol>
            <CCol xs="3" md="3">
                <CSelect custom name="lenght" id="select">
                    <option value="0">Max. Bandwidth</option>
                    <option value="100M">100</option>
                    <option value="1000M">1000</option>
                </CSelect>
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">M</p>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="PoE Ports"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="0" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">N/A</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="4" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">4</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="8" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">8</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio3" name="inline-radios" value="16" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">16</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio3" name="inline-radios" value="24" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">24</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Decoding Capability"/>
            <CCol xs="4" md="4">
                <CSelect custom name="port" id="select">
                    <option value="0">Channel support decoding</option>
                    <option value="2ch">2</option>
                    <option value="3ch">3</option>
                    <option value="4ch">4</option>
                    <option value="6ch">6</option>
                    <option value="8ch">8</option>
                    <option value="12ch">12</option>
                    <option value="16ch">16</option>
                </CSelect> 
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">-ch</p>
            </CCol>
            <CCol xs="3" md="3">
                <CSelect custom name="lenght" id="select">
                    <option value="0">Max. Pixels</option>
                    <option value="720p">720</option>
                    <option value="1080p">1080</option>
                </CSelect>
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">P</p>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm  md="3" name="HDMI Output"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="1" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">1</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="2" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">2</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Mendukung 4K "/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="1" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Ya</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="0" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Tidak</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="eSATA"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="0" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">N/A</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="opt" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Opsional</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="1" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">1</CLabel>
            </CFormGroup>
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

export default FormNvr;
