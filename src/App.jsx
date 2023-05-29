import EmployeeList from './components/EmployeeList'
import { Typography } from 'antd'
import EditEmpData from './components/EditEmpData'
import { EmployeeContextProvider } from './context/EmployeeContext'

const { Title } = Typography

const App = () => {
  return (
    <EmployeeContextProvider>
      <Typography style={{ textAlign: 'center' }}>
        <Title> Employee Data</Title>
      </Typography>
      <EmployeeList />
      <EditEmpData />
    </EmployeeContextProvider>
  )
}

export default App
