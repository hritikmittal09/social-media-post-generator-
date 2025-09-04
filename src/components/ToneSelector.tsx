interface ToneSelectorProps {
  tone: string;
  setTone: (tone: string) => void;
}

export default function ToneSelector({ tone, setTone }: ToneSelectorProps) {
  return (
    <div className="mb-4">
      <label className="text-white">Tone of Voice:</label>
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="bg-black text-white p-2 rounded ml-2"
      >
        <option className="bg-black text-white">Friendly</option>
        <option className="bg-black text-white">Professional</option>
        <option className="bg-black text-white">Casual</option>
        <option className="bg-black text-white">Formal</option>
      </select>
    </div>
  );
}