interface GenerateButtonProps {
  brandColor: string;
  onClick: () => void;
}

export default function GenerateButton({ brandColor, onClick }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 rounded-xl font-bold"
      style={{ backgroundColor: brandColor }}
    >
      Generate Post
    </button>
  );
}
