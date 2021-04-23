import React from 'react'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from './DatePicker'
import Input from './Input'
import RadioButtons from './RadioButtons'
import SelectDropdown from './SelectDropdown'
import TextArea from './TextArea'

function FormikControl(props) {
    const {control, ...rest} = props

    switch(control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <SelectDropdown {...rest} />
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <CheckboxGroup {...rest} />
        case 'date': return <DatePicker {...rest}/>
        default: return null
    }
}

export default FormikControl
