import { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";

interface CreateInputFieldProps {
    createMode: boolean;
    setCreateMode: Dispatch<SetStateAction<boolean>>;
}

const CreateInputField: React.FC<CreateInputFieldProps> = ({ createMode, setCreateMode }) => {
  return (
    <div>
        <input type="text" placeholder="Enter question bank title..." />
        <Button onClick={() => setCreateMode(!createMode)}>Cancel</Button>
    </div>
  )
}

export default CreateInputField