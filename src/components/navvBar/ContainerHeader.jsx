import Rightbar from '../rightbar/Rightbar'
import './ContainerHeader.css'
import Leftbar from './leftbar/Leftbar'

const ContainerHeader = () => {
  return (
    <div className='cont'>
      <Leftbar />
      <Rightbar/>
    </div>
  )
}

export default ContainerHeader