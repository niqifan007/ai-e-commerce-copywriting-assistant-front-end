import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

// Create LMStudio instance
const lmstudio = createOpenAI({
  name: 'lmstudio',
  apiKey: 'not-needed',
  baseURL: 'http://localhost:1234/v1',
});

// The model name should match what you have loaded in LMStudio
const MODEL_NAME = 'rombos-llm-v2.6-qwen-14b';

class LMStudioService {
  async generateDescription(
    title: string,
    keywords: string,
    platform: string,
    language: 'zh' | 'en'
  ): Promise<string> {
    try {
      const keywordsList = keywords.split('\n').filter(k => k.trim());
      
      const prompt = language === 'zh' 
        ? `请为以下商品生成一个吸引人的商品描述：
          商品标题：${title}
          关键词：${keywordsList.join('、')}
          电商平台：${platform}
          
          要求：
          1. 描述要突出商品的核心卖点和优势
          2. 语言要生动活泼，符合${platform}平台的风格
          3. 适当融入关键词，但要自然流畅
          4. 结构要清晰，便于阅读`
        : `Please generate an attractive product description for the following item:
          Product Title: ${title}
          Keywords: ${keywordsList.join(', ')}
          E-commerce Platform: ${platform}
          
          Requirements:
          1. Highlight the core selling points and advantages
          2. Use engaging language that matches ${platform}'s style
          3. Naturally incorporate keywords
          4. Create a clear, readable structure`;

      const { text } = await generateText({
        model: lmstudio(MODEL_NAME),
        prompt,
      });

      return text;
    } catch (error) {
      console.error('Error generating description:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      throw error; // 重新抛出错误，让上层处理
    }
  }
}

export const lmstudioService = new LMStudioService();
