import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

// Create LMStudio instance for translation
const lmstudio = createOpenAI({
  name: 'lmstudio',
  apiKey: 'not-needed',
  baseURL: 'http://localhost:1234/v1',
});

// The model name should match what you have loaded in LMStudio
const MODEL_NAME = 'marco-o1';

export type Language = {
  code: string;
  name: string;
  localName: string;
};

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'zh', name: 'Chinese', localName: '中文' },
  { code: 'en', name: 'English', localName: 'English' },
  { code: 'ja', name: 'Japanese', localName: '日本語' },
  { code: 'ko', name: 'Korean', localName: '한국어' },
  { code: 'es', name: 'Spanish', localName: 'Español' },
  { code: 'fr', name: 'French', localName: 'Français' },
  { code: 'de', name: 'German', localName: 'Deutsch' },
  { code: 'it', name: 'Italian', localName: 'Italiano' },
  { code: 'ru', name: 'Russian', localName: 'Русский' },
  { code: 'pt', name: 'Portuguese', localName: 'Português' },
];

class TranslationService {
  async translate(
    content: string,
    sourceLanguage: string,
    targetLanguage: string,
    category?: string
  ): Promise<string> {
    try {
      const sourceLang = SUPPORTED_LANGUAGES.find(lang => lang.code === sourceLanguage);
      const targetLang = SUPPORTED_LANGUAGES.find(lang => lang.code === targetLanguage);

      if (!sourceLang || !targetLang) {
        throw new Error('Unsupported language');
      }

      const prompt = `You are a professional e-commerce content translator.
      
Task: Translate the following e-commerce product content from ${sourceLang.name} to ${targetLang.name}.
${category ? `Product Category: ${category}` : ''}

Content to translate:
${content}

Requirements:
1. Maintain the professional e-commerce style and tone
2. Preserve all product specifications and technical details accurately
3. Use appropriate e-commerce terminology for the target language
4. Keep the translation natural and engaging for the target market
5. Maintain any formatting, line breaks, or special characters
6. Only output the translated content, without any explanations

Translation:`;

      const { text } = await generateText({
        model: lmstudio(MODEL_NAME),
        prompt,
        temperature: 0.7, // 降低温度以提高翻译准确性
      });

      return text.trim();
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }
}

export const translationService = new TranslationService();
