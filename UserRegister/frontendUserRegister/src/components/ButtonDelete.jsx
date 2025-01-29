/**
 * ButtonDelete component
 *
 * This component renders a button that, when clicked, sends a DELETE request to remove a user by ID.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.id - The ID of the user to delete
 * @param {function} props.onDeleteSuccess - Callback function to be called upon successful deletion
 *
 * @example
 * <ButtonDelete id="123" onDeleteSuccess={() => console.log('User deleted')} />
 */
import axios from 'axios';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import { baseUrl } from './UserList';

const ButtonDelete = ({ id, onDeleteSuccess }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`${baseUrl}/${id}`);
            console.log('Delete successful');
            if (onDeleteSuccess) onDeleteSuccess();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <StyledButton variant="delete" onClick={handleDelete}>
            &#x1F5D1; Delete
        </StyledButton>
    );
};
ButtonDelete.propTypes = {
    id: PropTypes.number.isRequired,
    onDeleteSuccess: PropTypes.func.isRequired,
};

export default ButtonDelete;
