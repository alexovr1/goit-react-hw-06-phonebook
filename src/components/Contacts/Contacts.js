import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Label } from 'components/Form/Form.styled';
import { FindContact, DeleteBtn, Contact } from './Contacts.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
    };

    const normalisedFilter = filter.toLowerCase();
    const filteredList = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalisedFilter)
    );


    return (
        <FindContact>
            <Label>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    onChange={handleFilterChange}
                />
            </Label>
            <ul>
                {filteredList.length !== 0
                    ? filteredList.map(({ id, name, number }) => (
                        <Contact key={id}>
                            {name}: {number}
                            <DeleteBtn type="button" onClick={() => dispatch(deleteContact(name))}>
                                Delete
                            </DeleteBtn>
                        </Contact>
                    ))
                    : ''}
            </ul>
        </FindContact>
    );
}