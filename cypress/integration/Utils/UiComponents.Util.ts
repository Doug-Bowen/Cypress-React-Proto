export class UiComponentsUtil {
    fillFormField({field, textToEnter}: FillFormFieldParams) {
        field.click();
        field.type(textToEnter);
    }

    verifyFormField({field, expectedText}: VerifyFormField) {
        field.invoke("val").should("eq", expectedText);
    }
}

interface FillFormFieldParams {
    field: any;
    textToEnter: any;
}

interface VerifyFormField {
    field: any;
    expectedText: any;
}