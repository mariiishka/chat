export type Field = {
  id: string;
  value: string;
  placeholder: string;
  type: FieldType;
  dimension: FieldDimension;
  position: FieldPosition;
  required: boolean;
  signerId: string;
};

export type FieldDimension = {
  width: number;
  height: number;
};

export type FieldPosition = {
  top: number;
  left: number;
  page: number;
};

export type FieldType = 'signature' | 'text';

export type SignatureField = Field & {
  type: 'signature';
};

export type TextField = Field & {
  type: 'text';
};
