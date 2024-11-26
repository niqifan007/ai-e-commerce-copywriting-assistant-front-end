import {
  BarChart3,
  ShoppingBag,
  Megaphone,
  MessageSquare,
  Settings,
  Presentation, // Changed from PresentationScreen to Presentation
  Tags,
  Users,
  Mail,
  Share2,
  FileText,
  Search,
  Package,
  TrendingUp,
  Target,
  MessageCircle,
  MoreHorizontal,
} from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function CommonFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={FileText}
        title="商品描述生成"
        description="智能生成吸引人的商品描述文案"
      />
      <FeatureCard
        icon={Tags}
        title="标题优化"
        description="优化商品标题以提高点击率"
      />
      <FeatureCard
        icon={Search}
        title="关键词建议"
        description="获取相关搜索关键词建议"
      />
    </div>
  );
}

export function ProductFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={Package}
        title="产品特点提取"
        description="自动提取并突出产品核心特点"
      />
      <FeatureCard
        icon={ShoppingBag}
        title="产品卖点分析"
        description="分析并强化产品主要卖点"
      />
      <FeatureCard
        icon={BarChart3}
        title="竞品分析"
        description="智能分析竞争产品优势"
      />
    </div>
  );
}

export function MarketingFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={TrendingUp}
        title="营销策略"
        description="制定个性化营销策略建议"
      />
      <FeatureCard
        icon={Presentation}
        title="活动文案"
        description="生成促销活动主题文案"
      />
      <FeatureCard
        icon={Share2}
        title="社媒营销"
        description="创建社交媒体营销内容"
      />
    </div>
  );
}

export function AdvertisingFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={Target}
        title="广告文案"
        description="生成针对性广告推广文案"
      />
      <FeatureCard
        icon={Megaphone}
        title="推广方案"
        description="制定全方位推广投放方案"
      />
      <FeatureCard
        icon={Users}
        title="受众分析"
        description="分析目标用户群体特征"
      />
    </div>
  );
}

export function CommunicationFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={MessageCircle}
        title="客服话术"
        description="生成专业客服应答话术"
      />
      <FeatureCard
        icon={Mail}
        title="邮件模板"
        description="创建营销邮件模板内容"
      />
      <FeatureCard
        icon={MessageSquare}
        title="评价回复"
        description="智能生成评价回复内容"
      />
      <FeatureCard
        icon={MessageSquare}
        title="邀约信件撰写"
        description="生成KOL邀约信件"
      />
    </div>
  );
}

export function OtherFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={Settings}
        title="个性化设置"
        description="自定义AI助手参数配置"
      />
      <FeatureCard
        icon={MoreHorizontal}
        title="更多功能"
        description="探索更多辅助功能"
      />
    </div>
  );
}
