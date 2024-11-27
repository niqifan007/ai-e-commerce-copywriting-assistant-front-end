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
  Bookmark,
  Activity,
  ListCheck,
  Pen,
  Box,
  Languages,

} from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function CommonFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard 
        icon={FileText}
        title="商品描述生成"
        description="生成高质量产品详细描述,高埋词率,吸引客户兴趣。"
        route="/features/product-description"
      />
      <FeatureCard
        icon={Tags}
        title="标题优化" 
        description="优化Listing标题,增强搜索引擎友好度。"
      />
      <FeatureCard
        icon={Search}
        title="关键词提取"
        description="从文本中提取有效关键词,提升搜索效果。"
      />
      <FeatureCard
        icon={Bookmark}
        title="标签提取"
        description="从Listing中提取高效标签,助力营销。"
      />
      <FeatureCard
        icon={Activity}
        title="标签生成"
        description="自动生成品牌增亮标签,提高产品曝光。" 
      />
      <FeatureCard
        icon={Settings}
        title="关键词优化"
        description="优化相关关键词,提高搜索转化率。"
      />
      <FeatureCard
        icon={ListCheck}
        title="Listing优化"
        description="整体优化Listing,提升排名,增加好评。"
      />
      <FeatureCard
        icon={Pen}
        title="Listing对比"
        description="对比不同Listing,找出优缺点提升策略。"
      />
      <FeatureCard
        icon={Box}
        title="商品描述优化"
        description="优化产品描述,输出符合期望的描述。"
      />
      <FeatureCard
        icon={FileText}
        title="Listing生成"
        description="快速生成高质量的Listing,提升上架效率。"
      />
      <FeatureCard
        icon={Search}
        title="关键词生成"
        description="根据产品信息生成合适的关键词"
      />
      <FeatureCard
        icon={FileText}
        title="搜索词生成"
        description="智能生成后台搜索关键词，提升搜索曝光。"
      />
      <FeatureCard
        icon={Search}
        title="关键词扩展"
        description="扩展相关关键词，覆盖更多流量。"
      />
      <FeatureCard
        icon={Languages}
        title="电商专业翻译"
        description="使用阿里国际大模型Marco-o1翻译。"
        route="/features/translation"
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
