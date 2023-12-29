import { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";
import { buttonStyle } from "./styles";

interface CreateNewButtonProps {
  createMode: boolean;
  setCreateMode: Dispatch<SetStateAction<boolean>>;
}

const CreateNewButton: React.FC<CreateNewButtonProps> = ({ createMode, setCreateMode }) => {
  return (
    <Button style={buttonStyle} onClick={() => setCreateMode(!createMode)}>
      <span style={{ margin: "15px 25px" }}>Create New Bank</span>
    </Button>
  );
};

export default CreateNewButton;
