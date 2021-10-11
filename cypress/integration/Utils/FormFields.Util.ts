interface FillFormFieldParams {
    field: any;
    textToEnter: any;
}

export class FormFields {
    fillFormField({field, textToEnter}: FillFormFieldParams){
        field.click();
        field.type(textToEnter);
    }
}