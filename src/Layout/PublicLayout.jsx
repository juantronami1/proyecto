import React from 'react'
import { Navbar } from 'react-bootstrap'
import Navbars from '../Components/Navbars'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars />
            este es mi publicLayout
            {children}
        </div>
    )
}

export default PublicLayout
