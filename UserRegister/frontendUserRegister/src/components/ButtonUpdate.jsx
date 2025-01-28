import axios from 'axios';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const ButtonUpdate = ({ id, updatedData, onUpdateSuccess }) => {
    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/users/${id}`, updatedData);
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
    id: PropTypes.string.isRequired,
    updatedData: PropTypes.object.isRequired,
    onUpdateSuccess: PropTypes.func,
};

export default ButtonUpdate;
