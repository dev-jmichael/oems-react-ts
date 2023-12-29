import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button } from "react-bootstrap";
import { convertToTitleCase } from "../../../utils/StringUtil";

interface CreateQuestionBankFormProps {
  createMode: boolean;
  setCreateMode: Dispatch<SetStateAction<boolean>>;
  submitTitle: (title: string) => Promise<void>;
}

const CreateQuestionBankForm: React.FC<CreateQuestionBankFormProps> = ({
  createMode,
  setCreateMode,
  submitTitle,
}) => {
  const [title, setTitle] = useState<string>("");

  const handleTitleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitTitle(convertToTitleCase(title));
    setTitle("");
    setCreateMode(!createMode);
  };

  return (
    <>
      <form onSubmit={handleTitleSubmit}>
        <input
          type="text"
          placeholder="Enter question bank title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={() => setCreateMode(!createMode)}>Cancel</Button>
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default CreateQuestionBankForm;
