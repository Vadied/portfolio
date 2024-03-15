import { StarIcon } from "@heroicons/react/16/solid";

type Props = {
  value: number;
}
const StarRating: React.FC<Props> = ({ value }: Props) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className={`h-5 w-5 ${index < value ? 'text-yellow-500' : 'text-gray-300'}`} />
      ))}
    </div>
  );
};

export default StarRating;