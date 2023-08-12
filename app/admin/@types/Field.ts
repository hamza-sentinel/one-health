export default interface Field {
  name: string;
  type: string;
  required: boolean;
  label: string;
  accept?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  image?: string;
  multiple?: boolean;
}
