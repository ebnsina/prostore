interface RatingProps {
  value: number;
  total?: number;
  reviewsCount?: number;
}

export default function Rating({
  value,
  total = 5,
  reviewsCount,
}: RatingProps) {
  const roundedValue = Math.round(value);

  return (
    <div className="flex items-center">
      <span className="text-yellow-500">
        {"★".repeat(roundedValue)}
        {"☆".repeat(total - roundedValue)}
      </span>

      {reviewsCount !== undefined && (
        <span className="text-sm text-gray-500 ml-2">
          ({reviewsCount} reviews)
        </span>
      )}
    </div>
  );
}
