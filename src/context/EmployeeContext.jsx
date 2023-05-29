import employeeDataReducer, { initialState } from './EmployeeDataReducer'
import { createContext, useReducer, useContext } from 'react'

const EmployeeContext = createContext(initialState)

export const EmployeeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeDataReducer, initialState)

  const showEdit = (currentRecord) => {
    dispatch({
      type: 'SET_EDIT',
      payload: {
        currentEmployeeData: currentRecord,
      },
    })
  }

  const showModalEdit = (currentRecord) => {
    dispatch({
      type: 'SET_MODAL_EDIT',
      payload: {
        currentEmployeeData: currentRecord,
      },
    })
  }
  const saveEditData = (currentRecord) => {
    dispatch({
      type: 'SAVE_EDIT_DATA',
      payload: {
        empRecord: currentRecord,
      },
    })
  }
  const resetState = () => {
    dispatch({
      type: 'RESET_STATE',
    })
  }
  const value = {
    employeeData: state.employeeData,
    showEdit,
    showModalEdit,
    saveEditData,
    resetState,
    currentEmpData: state.currentEmpData,
    displayEdit: state.displayEdit,
    displayModalEdit: state.displayModalEdit,
  }
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  )
}

const useEmployeeData = () => {
  const context = useContext(EmployeeContext)

  if (context === undefined) {
    throw new Error('useEmployeeData must be used within EmployeeContext')
  }

  return context
}

export default useEmployeeData
