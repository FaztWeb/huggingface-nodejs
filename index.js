import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;
const inference = new HfInference(HF_ACCESS_TOKEN);
const model = "facebook/nllb-200-distilled-600M";

try {
  const result = await inference.translation({
    model,
    inputs: "Hello My name is John Doe and I am a software engineer",
    parameters: {
      src_lang: "en",
      tgt_lang: "es",
    },
  });
  console.log(result);
} catch (error) {
  console.error(error);
}
