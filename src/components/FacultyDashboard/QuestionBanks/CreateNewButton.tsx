import { CSSProperties, Dispatch, SetStateAction } from "react"
import { Button } from "react-bootstrap"
import { boxShadowStyle } from "../styles"

interface CreateNewButtonProps {
    createMode: boolean;
    setCreateMode: Dispatch<SetStateAction<boolean>>;
}

const CreateNewButton: React.FC<CreateNewButtonProps> = ({ createMode, setCreateMode }) => {
    const buttonStyle: CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        color: 'black',
        border: 'none',
        padding: '5px 15px !important',
        ...boxShadowStyle
    }

    return (
        <Button style={buttonStyle} onClick={() => setCreateMode(!createMode)}>
            <span style={{ margin: '15px 25px' }}>Create New Bank</span>
        </Button>
    )
}

export default CreateNewButton