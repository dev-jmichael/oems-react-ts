import { Dispatch, SetStateAction } from "react";
import CreateInputField from "./CreateInputField";
import CreateNewButton from "./CreateNewButton";

interface QuestionBankActionsProps {
  createMode: boolean;
  setCreateMode: Dispatch<SetStateAction<boolean>>;
}

const QuestionBankActions: React.FC<QuestionBankActionsProps> = ({ createMode, setCreateMode }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0px' }}>
        { createMode ? 
          <CreateInputField 
            createMode={createMode} 
            setCreateMode={setCreateMode}
          /> 
          : 
          <CreateNewButton 
            createMode={createMode} 
            setCreateMode={setCreateMode}
          />
        }
        <input type="text" placeholder="Search"/>
    </div>
  )
}

export default QuestionBankActions