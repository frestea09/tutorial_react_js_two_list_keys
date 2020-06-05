import React from 'react'
import Content from './component/Content'
import Header from './component/Header'
import Mahasiswa from './component/Mahasiswa'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'name':'ilman',
      'listMahasiswa':[
        {
          'id':0,
          'nim':'10112299',
          'nama':'ilman teguh prasetya'
        },
        {
          'id':1,
          'nim':'10112283',
          'nama':'lies hartiani'
        },
        {
          'id':2,
          'nim':'10112281',
          'nama':'deni jaeni'
        }
      ]
    }
    this.changeName = this.changeName.bind(this)
  }
  changeName(){
    this.setState(
      {
        'name':'ilman ganteng'
      }
    )
  }
  render(){
    const listMahasiswa = this.state.listMahasiswa.map(mahasiswa=><Mahasiswa  inputMahasiswa = {mahasiswa}/>)
    return(
      <div className='App'>
        {listMahasiswa}
        <Content namaMahasiswa = {this.state.name} ubahNama = {this.changeName}/>
        <Header/>
      </div>
    )
  }
}
export default App