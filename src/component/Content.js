import React from 'react'

class Content extends React.Component{
    render(){
        return(
            <div className='Content'>
                <h3>Hello World {this.props.namaMahasiswa}</h3>
                <button onClick={this.props.ubahNama}>Ubah Nama</button>
            </div>
        )
    }
}
export default Content