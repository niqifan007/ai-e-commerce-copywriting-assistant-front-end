import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Bot className="w-12 h-12 text-primary" />
        <h1 className="text-3xl font-bold ml-2">AI 电商文案助手</h1>
      </div>
      <div className="max-w-xl mx-auto">
        <Input 
          placeholder="请输入想要的内容..." 
          className="mb-4"
        />
        <div className="flex gap-2 justify-center">
          <Button>开始生成</Button>
          <Button variant="outline">创建文案</Button>
        </div>
      </div>
    </div>
  );
}