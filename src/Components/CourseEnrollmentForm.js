import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function CourseEnrollmentForm() {

    const dropdownOptions = [
        {key: 'Select your course', value: ''},
        {key: 'React', value: 'react'},
        {key: 'Angular', value: 'angular'},
        {key: 'Vue', value: 'vue'}
    ]

    const checkboxoptions = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value:'css'},
        {key: 'JavaScript', value: 'javascript'}
    ]

    const initialValues={
        email: '',
        bio: '',
        course: '',
        skills: [],
        couseDate: null
    }

    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid email format').required('Required'),
        bio: Yup.string().required('Required!'),
        course: Yup.string().required('Requried'),
        courseDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = (values) => {
        console.log('Form data: ', values)
    }

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    {
                        (formik) => {
                            return (<Form>
                                <FormikControl
                                control='input'
                                label='Email'
                                name='email'/>

                                <FormikControl
                                    control='textarea'
                                    label='Bio'
                                    name='bio'/>

                                <FormikControl
                                    control='select'
                                    label='Course'
                                    name='course'
                                    options={dropdownOptions}/>

                                <FormikControl
                                    control='checkbox'
                                    label='Your skillset'
                                    name='skills'
                                    options={checkboxoptions} />

                                <FormikControl
                                    control='date'
                                    label='Date'
                                    name='courseDate'/>

                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>)
                        }
                    }
        
                </Formik>
        </div>
    )
}

export default CourseEnrollmentForm
