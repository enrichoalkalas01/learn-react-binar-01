import React from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

class Tester extends React.Component {
    state = {
        Nama: null,
        Alamat: null,
        Config: {
            url: 'http://www.omdbapi.com/?apikey=58ed57ce&s=avatar',
            method: 'get'
        },
        OMDBData: null
    }

    constructor(props) {
        super(props)
        this.state.Nama = props.Nama
        this.state.Alamat = props.Alamat
    }

    componentDidMount() {
        // console.log(this.props.StoreData.UserReducers)
        // this.props.ChangeLoginStatus()
        Axios(this.state.Config).then(response => {
            console.log(response)
            this.setState({
                OMDBData: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidUpdate() {
        console.log(this.props.StoreData.UserReducers)
    }

    render() {
        return(
            <>
                {
                    this.state.OMDBData !== null ? 
                        this.state.OMDBData.Search.map((data, index) => {
                            return(
                                <div>
                                    <img src={ data.Poster } alt={data.Title} />
                                    <div>Halo { data.Title }, Welcome to tester js. Your Address { data.title }</div>
                                </div>
                            )
                        })
                    : null
                }
            </>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        StoreData: state
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        ChangeLoginStatus: () => {
            dispatch({
                type: 'LOGIN_STATUS',
                payload: true,
            })
        }
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Tester)