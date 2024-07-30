import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { UseGetAllBlu } from '../../hooks/UseBlu';
import { ItemInterface } from '../../pages/Home';
import ComboInput from '../inputs/ComboInput';

const FirstStepper = () => {
    const { data } = UseGetAllBlu()
    const { control, getValues } = useFormContext();
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (newValue: string) => {
        setSelectedOption(newValue);
    };
    const allNames = [...new Set<string>(data?.data.map((item: ItemInterface) => item.name))];

    return (
        <div style={classes.FormWrapper}>
            <ComboInput
                control={control}
                options={allNames}
                selectedOption={getValues().facilities ?? selectedOption}
                onChange={handleChange}
                name='facilities'
                label='facilities'
                required
            />
        </div>)
}

export default FirstStepper;

const classes = {
    FormWrapper: {
        display: "flex",
        gap: "2rem",
        justifyContent: "center"
    }
}
