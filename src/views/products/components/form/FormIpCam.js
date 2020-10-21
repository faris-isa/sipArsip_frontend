import React, { useState } from 'react';
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

const FormIpCam = () => {
    const [formFactor, setFormFactor] = useState([
        { label: "EXIR Mini Bullet", value: "minibullet"},
        { label: "EXIR Mini Dome", value: "minidome"},
        { label: "EXIR Dome", value: "dome" },
        { label: "EXIR Turret", value: "turret" },
        { label: "EXIR Cube", value: "cube" },
        { label: "EXIR VF Bullet", value: "vfbullet" },
        { label: "EXIR VF Dome", value: "vfdome" },
        { label: "EXIR VF Turret", value: "vfturret" },
        { label: "IR Panoramic", value: "panoramic" },
        { label: "Warm LED Bullet", value: "ledbullet" },
      ]);

      const optionFactor = () => {
            formFactor.map((f, i) => 
            <option key={i} value={f.value}>{f.label}</option> )
      }

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
            <LabelForm md="3" name="Max. Resolution"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="2" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">2</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="4" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">4</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio3" name="inline-radios" value="6" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">6</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio3" name="inline-radios" value="8" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">8</CLabel>
            </CFormGroup>
            MP </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Form Factor"/>
            <CCol xs="12" md="9">
                <CSelect custom name="port" id="select">
                    <option value="0">Pilih Form Factor</option>
                    {
                    formFactor.map((f, i) => 
                    <option key={i} value={f.value}>{f.label}</option> ) 
                    }
                </CSelect> 
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Protection"/>
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
                <CInputRadio custom id="inline-radio4" name="inline-radios" value="24" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio4">24</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Lens"/>
            <CCol md="4">
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox 
                    custom id="lens2.8" 
                    name="lens2.8" 
                    value="2.8" 
                    />
                    <CLabel variant="custom-checkbox" htmlFor="len2.8">2.8</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens4" name="lens4" value="4" />
                    <CLabel variant="custom-checkbox" htmlFor="lens4">4</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens6" name="lens6" value="6" />
                    <CLabel variant="custom-checkbox" htmlFor="lens6">6</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens2.8-12" name="lens2.8" value="2.8-12" />
                    <CLabel variant="custom-checkbox" htmlFor="lens2.8-12">2.8 ~ 12</CLabel>
                </CFormGroup>
                mm
            </CCol>
            <CCol md="5">
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="lensnone" name="lens" value="none" />
                    <CLabel variant="custom-checkbox" htmlFor="lensnone">None</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="lensfixed" name="lens" value="fixed" />
                    <CLabel variant="custom-checkbox" htmlFor="lensfixed">Fixed Lens</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="lensmotor" name="lens" value="motorized" />
                    <CLabel variant="custom-checkbox" htmlFor="lensmotor">Motorized VF Lens</CLabel>
                </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            
            <LabelForm md="3" htmlfor="text-input" name="WDR" />

            <CCol md="7">
                <CInput id="text-input" name="text-input" placeholder="12 " value="120dB"/>
                <CFormText>Isian WDR (default 120dB)</CFormText>
            </CCol>
            <CCol md="2">
                <p className="form-control-static">WDR</p>
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

export default FormIpCam;
