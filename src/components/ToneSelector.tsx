interface ToneSelectorProps {
  tone: string;
  setTone: (tone: string) => void;
}

export default function ToneSelector({ tone, setTone }: ToneSelectorProps) {
  return (
    <div className="mb-4">
      <label>Tone of Voice:</label>
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="text-black p-2 rounded ml-2"
      >
        <option>Friendly</option>
        <option>Professional</option>
        <option>Casual</option>
        <option>Formal</option>
      </select>
    </div>
  );
}
