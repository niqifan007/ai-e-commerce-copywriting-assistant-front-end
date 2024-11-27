import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translationService, SUPPORTED_LANGUAGES } from '../services/translation';
import { translationHistoryService } from '../services/translationHistory';
import { Languages, Trash2 } from 'lucide-react';

const categories = [
  '服装',
  '电子产品',
  '家居用品',
  '美妆个护',
  '食品',
  '其他'
];

export function Translation() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('zh');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 加载历史记录
    const savedHistory = translationHistoryService.getHistory();
    setHistory(savedHistory);
  }, []);

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      alert('请输入需要翻译的内容');
      return;
    }

    try {
      setIsLoading(true);
      const result = await translationService.translate(
        sourceText,
        sourceLanguage,
        targetLanguage,
        category
      );
      setTranslatedText(result);

      // 保存到历史记录
      translationHistoryService.addRecord({
        sourceLanguage,
        targetLanguage,
        sourceText,
        translatedText: result,
        category: category || undefined
      });

      // 更新历史记录状态
      setHistory(translationHistoryService.getHistory());
    } catch (error) {
      console.error('翻译失败:', error);
      alert('翻译失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const getLanguageLocalName = (code: string) => {
    return SUPPORTED_LANGUAGES.find(lang => lang.code === code)?.localName || code;
  };

  const loadHistoryRecord = (record: any) => {
    setSourceLanguage(record.sourceLanguage);
    setTargetLanguage(record.targetLanguage);
    setSourceText(record.sourceText);
    setTranslatedText(record.translatedText);
    if (record.category) {
      setCategory(record.category);
    }
  };

  const deleteHistoryRecord = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    translationHistoryService.deleteRecord(id);
    setHistory(translationHistoryService.getHistory());
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
        <h1 className="text-2xl font-bold flex items-center">
          <Languages className="mr-2" />
          电商专业翻译
        </h1>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 border rounded-md"
              >
                <option value="">选择类目（可选）</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="p-2 border rounded-md"
              >
                {SUPPORTED_LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.localName}
                  </option>
                ))}
              </select>
              
              <button
                onClick={handleSwapLanguages}
                className="p-2 rounded-md hover:bg-gray-50"
                title="切换语言"
              >
                🔄
              </button>

              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="p-2 border rounded-md"
              >
                {SUPPORTED_LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.localName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {getLanguageLocalName(sourceLanguage)}
              </label>
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                className="w-full h-64 p-3 border rounded-md"
                placeholder={`请输入${getLanguageLocalName(sourceLanguage)}内容`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {getLanguageLocalName(targetLanguage)}
              </label>
              <div className="relative">
                <textarea
                  value={translatedText}
                  readOnly
                  className="w-full h-64 p-3 border rounded-md bg-gray-50"
                  placeholder={`${getLanguageLocalName(targetLanguage)}翻译将显示在这里`}
                />
                {translatedText && (
                  <button
                    onClick={() => navigator.clipboard.writeText(translatedText)}
                    className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                    title="复制翻译结果"
                  >
                    📋
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleTranslate}
              disabled={isLoading}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isLoading ? '翻译中...' : '开始翻译'}
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">历史记录</h2>
          <div className="space-y-3">
            {history.map((record) => (
              <div
                key={record.id}
                onClick={() => loadHistoryRecord(record)}
                className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm text-gray-600">
                        {getLanguageLocalName(record.sourceLanguage)} → {getLanguageLocalName(record.targetLanguage)}
                      </span>
                      {record.category && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {record.category}
                        </span>
                      )}
                    </div>
                    <p className="text-sm truncate">{record.sourceText}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(record.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={(e) => deleteHistoryRecord(record.id, e)}
                    className="ml-2 p-1 text-gray-400 hover:text-red-500"
                    title="删除记录"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
