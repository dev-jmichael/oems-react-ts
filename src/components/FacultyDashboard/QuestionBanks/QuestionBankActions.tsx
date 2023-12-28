import { Dispatch, SetStateAction } from "react";
import CreateQuestionBankForm from "./CreateQuestionBankForm";
import CreateNewButton from "./CreateNewButton";

interface QuestionBankActionsProps {
  createMode: boolean;
  setCreateMode: Dispatch<SetStateAction<boolean>>;
  submitTitle: (title: string) => Promise<void>;
}

const QuestionBankActions: React.FC<QuestionBankActionsProps> = ({ createMode, setCreateMode, submitTitle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0px' }}>
        { createMode ? 
          <CreateQuestionBankForm 
            createMode={createMode} 
            setCreateMode={setCreateMode}
            submitTitle={submitTitle}
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