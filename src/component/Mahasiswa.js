import React from 'react'

function Mahasiswa(props){
    return(
        <div>
            <ul>
                <li>{props.inputMahasiswa.nim}</li>
                <li>{props.inputMahasiswa.nama}</li>
            </ul>
        </div>
    )
}
export default Mahasiswa