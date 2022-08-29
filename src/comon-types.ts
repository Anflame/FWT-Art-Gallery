export type CardProps = {
  id: number;
  title: string;
  name: string;
  handleCLick?: () => void;
  img: string;
  className?: string;
  isPrimary?: boolean;
};
