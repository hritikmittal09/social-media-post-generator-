import { useState } from "react";

interface UploadImageProps {
  label: string;
  onUpload: (fileData: string) => void;
}

export default function UploadImage({ label, onUpload }: UploadImageProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type="file"
        accept="image/*"
        className="mt-2 block w-full"
        onChange={handleUpload}
      />
      {preview && <img src={preview} alt="Preview" className="w-full mt-2 rounded-lg" />}
    </div>
  );
}
