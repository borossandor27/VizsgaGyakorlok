import axios from 'axios';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import { baseUrl } from './UserList';

const ButtonUpdate = ({ id, updatedData, onUpdateSuccess }) => {
    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${baseUrl}/${id}`, updatedData);
            console.log('Update successful:', response.data);
            if (onUpdateSuccess) onUpdateSuccess();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <StyledButton variant="update" onClick={handleUpdate}>
            &#x270e; Update
        </StyledButton>
    );
};

ButtonUpdate.propTypes = {
    id: PropTypes.number.isRequired,
    updatedData: PropTypes.object.isRequired,
    onUpdateSuccess: PropTypes.func,
};

export default ButtonUpdate;
