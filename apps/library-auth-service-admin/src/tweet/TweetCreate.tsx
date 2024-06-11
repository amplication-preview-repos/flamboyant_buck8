import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" source="content" />
      </SimpleForm>
    </Create>
  );
};
