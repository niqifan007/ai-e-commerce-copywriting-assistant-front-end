import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { lmstudioService } from '../services/lmstudio';
import { historyService } from '../services/history';

interface FormData {
  title: string;
  keywords: string;
  platform: string;
  language: 'zh' | 'en';
}

export function ProductDescription() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    keywords: '',
    platform: '',
    language: 'zh'
  });
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 加载历史记录
    const savedHistory = historyService.getHistory();
    setHistory(savedHistory);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({
      title: '',
      keywords: '',
      platform: '',
      language: 'zh'
    });
    setGeneratedContent('');
  };

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      const content = await lmstudioService.generateDescription(
        formData.title,
        formData.keywords,
        formData.platform,
        formData.language
      );
      setGeneratedContent(content);
      
      // 保存到历史记录
      historyService.addRecord({
        title: formData.title,
        keywords: formData.keywords,
        platform: formData.platform,
        language: formData.language,
        generatedContent: content
      });
      
      // 更新历史记录状态
      setHistory(historyService.getHistory());
    } catch (error) {
      console.error('生成失败:', error);
      alert('生成失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const loadHistoryRecord = (record: any) => {
    setFormData({
      title: record.title,
      keywords: record.keywords,
      platform: record.platform,
      language: record.language
    });
    setGeneratedContent(record.generatedContent);
  };

  const deleteHistoryRecord = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    historyService.deleteRecord(id);
    setHistory(historyService.getHistory());
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 px-3 py-1 border rounded-md hover:bg-gray-50"
        >
          返回
        </button>
        <h1 className="text-2xl font-bold">商品描述生成</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">商品标题</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="请输入商品标题"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">商品关键词</label>
            <textarea
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              className="w-full h-32 p-2 border rounded-md"
              placeholder="请输入商品关键词，每行一个关键词"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">电商平台</label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">请选择电商平台</option>
              <option value="taobao">淘宝</option>
              <option value="tmall">天猫</option>
              <option value="jd">京东</option>
              <option value="pdd">拼多多</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">生成语言</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              清除内容
            </button>
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {isLoading ? '生成中...' : '生成'}
            </button>
          </div>

          {generatedContent && (
            <div>
              <label className="block text-sm font-medium mb-2">生成结果</label>
              <div className="w-full min-h-[200px] p-4 border rounded-md bg-gray-50 whitespace-pre-wrap">
                {generatedContent}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4">历史记录</h2>
            <div className="space-y-2">
              {history.map((record) => (
                <div
                  key={record.id}
                  onClick={() => loadHistoryRecord(record)}
                  className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer relative"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{record.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(record.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={(e) => deleteHistoryRecord(record.id, e)}
                      className="text-red-500 hover:text-red-700"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
