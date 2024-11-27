interface TranslationRecord {
  id: string;
  sourceLanguage: string;
  targetLanguage: string;
  sourceText: string;
  translatedText: string;
  category?: string;
  timestamp: number;
}

class TranslationHistoryService {
  private readonly STORAGE_KEY = 'translation_history';
  private readonly MAX_RECORDS = 50;

  getHistory(): TranslationRecord[] {
    const historyString = localStorage.getItem(this.STORAGE_KEY);
    return historyString ? JSON.parse(historyString) : [];
  }

  addRecord(record: Omit<TranslationRecord, 'id' | 'timestamp'>): void {
    const history = this.getHistory();
    const newRecord: TranslationRecord = {
      ...record,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };

    // Add new record to the beginning of the array
    history.unshift(newRecord);

    // Keep only the latest MAX_RECORDS records
    const updatedHistory = history.slice(0, this.MAX_RECORDS);
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
  }

  deleteRecord(id: string): void {
    const history = this.getHistory();
    const updatedHistory = history.filter(record => record.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
  }

  clearHistory(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

export const translationHistoryService = new TranslationHistoryService();
