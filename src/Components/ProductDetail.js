import React from 'react'

import Tester from './Tester'

class ProductDetail extends React.Component {
    state = {
        name: 'enrichoalkalas',
        kelas: 10,
        Array: [ 0, 1, 2, 3, 5, 6, 7, 8 ],
    }

    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        this.setState({ name: 'alex', kelas: 12 })
    }

    componentDidUpdate(prevState, prevProps) {
        if ( prevProps.name !== this.state.name ) {
            this.setState({
                name: 'jajang nurjaman'
            })
        }
    }

    render() {
        return(
            <>
                <h1>product-detail</h1>
                <div style={ this.state.kelas !== 10 ? { fontSize: '34px' } : { color: 'blue' } } >{ this.state.name }</div>
                <div>{ this.state.kelas }</div>
                {
                    this.state.Array.map((data, index) => {
                        return(
                            <Tester
                                key={ index }
                                Nama={ this.state.name }
                                Alamat="Depok, Jagakarsa"
                                ArrayData={ data }
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default ProductDetail