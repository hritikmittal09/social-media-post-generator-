interface BrandColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

export default function BrandColorPicker({ color, setColor }: BrandColorPickerProps) {
  return (
    <div className="mb-4">
      <label>Brand Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="ml-2"
      />
    </div>
  );
}
