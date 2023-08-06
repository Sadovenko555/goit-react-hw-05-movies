import PropTypes from 'prop-types';
import { SearchInput } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
    return (
        <SearchInput
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search movies..."
        />
    )
}

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
