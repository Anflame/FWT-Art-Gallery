export type CardProps = {
  id: number;
  title: string;
  name: string;
  handleCLick?: () => void;
  img: string;
  classname?: string;
  isPrimary?: boolean;
}