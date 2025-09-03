interface PostTextInputProps {
  text: string;
  setText: (text: string) => void;
}

export default function PostTextInput({ text, setText }: PostTextInputProps) {
  return (
    <div className="mb-4">
      <label>Desired Post Text:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 rounded text-white mt-2"
      />
    </div>
  );
}
