
"use client"
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import UploadImage from "@/components/UploadImage";
import BrandColorPicker from "@/components/BrandColorPicker";
import ToneSelector from "@/components/ToneSelector";
import PostTextInput from "@/components/PostTextInput";
import GenerateButton from "@/components/GenerateButton";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [brandColor, setBrandColor] = useState("#ff6600");
  const [tone, setTone] = useState("Friendly");
  const [text, setText] = useState("");
  const [generated, setGenerated] = useState(false);

useEffect(()=>{
  console.log(tone,text, brandColor)

},[image,logo,tone,text, brandColor])
  const handleGenerate = () => {
    // TODO: Integrate Gemini API
    setGenerated(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <Header />

      <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <UploadImage label="Vendor Image:" onUpload={setImage} />
        <UploadImage label="Logo (optional):" onUpload={setLogo} />
        <BrandColorPicker color={brandColor} setColor={setBrandColor} />
        <ToneSelector tone={tone} setTone={setTone} />
        <PostTextInput text={text} setText={setText} />
        <GenerateButton brandColor={brandColor} onClick={handleGenerate} />
      </div>

      {generated && (
        <PostPreview image={image} logo={logo} text={text} brandColor={brandColor} />
      )}
    </div>
  );
}
