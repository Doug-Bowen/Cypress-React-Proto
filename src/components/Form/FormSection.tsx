import { FC } from 'react';
import { Grid, Label } from './formSection.styles';

export interface FormSectionProps {
    columns: number;
    label?: string;
}

const FormSection: FC<FormSectionProps> = ({ children, columns, label }) => {
    return (
        <div>
            <Label hidden={!label}>{label}</Label>
            <Grid columns={columns}>
                { children }
            </Grid>
        </div>
    );
}

export default FormSection;
