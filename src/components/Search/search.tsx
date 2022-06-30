import * as React from 'react';
import { Container, InputContainer, Icon, LocationInput, DateInput } from './search.styled';
import { LongSquarePrimaryButton } from '../Buttons/buttons.styled';

const Search: React.FC = () => {
    const [location, setLocation] = React.useState('');
    const [date, setDate] = React.useState('');

    const handleLocationChange = (location: string) => setLocation(location);
    const handleDateChange = (date: string) => setDate(date);

    return (
        <>
            <Container>
                <InputContainer>
                    <Icon src="/images/Location.png" height="20px" width="14px" />
                    <LocationInput type="text" placeholder="Search by location" value={location} onChange={(e) => handleLocationChange(e.target.value)} />
                </InputContainer>

                <InputContainer>
                    <Icon src="/images/Calendar.png" height="20px" width="18px" />
                    <DateInput type="date" placeholder={new Date().toLocaleDateString('en-US')} value={date} onChange={(e) => handleDateChange(e.target.value)} />
                </InputContainer>

                <InputContainer>
                    <LongSquarePrimaryButton>Search</LongSquarePrimaryButton>
                </InputContainer>
            </Container>
        </>
    );
};

export default Search;
