import { SimpleForm, Create, required, TextInput, NumberInput } from "react-admin";

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <NumberInput source="id" validate={[required()]} label="Id"/>
                <TextInput source="title" validate={[required()]} label="Title"/>
                <TextInput source="imageSrc" validate={[required()]} label="Image" />
            </SimpleForm>
        </Create>
    )
}