import { Modal } from 'antd'
import 'antd/dist/antd.css'
import EmpFormData from './EmpFormData'
import useEmployeeData from '../context/EmployeeContext'

const EditEmpData = () => {
  const { displayEdit, displayModalEdit, resetState } = useEmployeeData()

  return (
    <>
      {displayEdit && <EmpFormData />}
      <Modal
        open={displayModalEdit}
        onCancel={resetState}
        footer={null}
        width={'70vw'}
        centered
      >
        <EmpFormData />
      </Modal>
    </>
  )
}

export default EditEmpData
