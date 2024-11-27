interface HistoryRecord {
  id: string;
  title: string;
  keywords: string;
  platform: string;
  language: 'zh' | 'en';
  generatedContent: string;
  timestamp: number;
}

class HistoryService {
  private readonly STORAGE_KEY = 'product_description_history';
  private readonly MAX_RECORDS = 50;

  getHistory(): HistoryRecord[] {
    const historyString = localStorage.getItem(this.STORAGE_KEY);
    return historyString ? JSON.parse(historyString) : [];
  }

  addRecord(record: Omit<HistoryRecord, 'id' | 'timestamp'>): void {
    const history = this.getHistory();
    const newRecord: HistoryRecord = {
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

export const historyService = new HistoryService();
