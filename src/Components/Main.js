import React from 'react'
import Navbar from './Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import LogoOne from '../Assets/images/logo512.png'

import '../Assets/css/style.css'

let dataTester = [ 0, 1, 2, 3, 5, 6, 7, 8 ] // array data
class Main extends React.Component {
    render() {
        return(
            <Container id="main-component">
                {
                    // How To Looping, but with array data
                    dataTester.map((data, index) => {
                        return(
                            <div id={ `data-image-${ index }` } key={ index } style={{ 
                                width: '150px',
                                height: '150px',
                                backgroundColor: 'brown',
                                backgroundImage: `url('${ window.location.origin }/logo512.png')`,
                                backgroundSize: 'cover'
                            }} onMouseOver={ this.HoverImages }></div>
                        )
                    })
                }
            </Container>
        )
    }

    // how to make function in class components
    HoverImages = (e) => {
        console.log(e.target) //  untuk memilih object target yang lebih spesifik
        console.log('hovered images')
    }
}

export default Main