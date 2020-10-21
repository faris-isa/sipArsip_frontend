import React, { useState } from 'react';
import {
  CCol,
  CLabel,
} from '@coreui/react'

const LabelForm = (props) => {
    return (
        <CCol md={props.md}>
            <CLabel htmlFor={props.htmlfor}>{props.name}</CLabel>
        </CCol>
    )
}

export default LabelForm;