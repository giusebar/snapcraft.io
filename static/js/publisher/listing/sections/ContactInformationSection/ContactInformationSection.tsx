import React from "react";

import MultipleInputs from "../../components/MultipleInputs";

type Props = {
  getFieldState: Function;
  register: Function;
  publisherName: string;
  control: {};
};

function ContactInformationSection({ register, control }: Props) {
  return (
    <>
      <div className="u-fixed-width">
        <h2 className="p-heading--4">Contact information</h2>
      </div>

      <MultipleInputs
        fieldName="websites"
        label="Websites"
        register={register}
        control={control}
      />

      <MultipleInputs
        fieldName="contacts"
        label="Contacts"
        register={register}
        control={control}
      />

      <MultipleInputs
        fieldName="donations"
        label="Donations"
        register={register}
        control={control}
      />

      <MultipleInputs
        fieldName="source-code"
        label="Source code"
        register={register}
        control={control}
      />

      <MultipleInputs
        fieldName="issues"
        label="Issues"
        register={register}
        control={control}
      />
    </>
  );
}

export default ContactInformationSection;
