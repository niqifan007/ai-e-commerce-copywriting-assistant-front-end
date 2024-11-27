import {
  MessageSquare,
  Settings,
  Presentation, // Changed from PresentationScreen to Presentation
  Tags,
  Users,
  Mail,
  Share2,
  FileText,
  Search,
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
  ThumbsDown,
  BarChart2

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
        icon={Users}
        title="用户画像分析"
        description="基于数据分析用户画像，精准定位客户。"
      />
      <FeatureCard
        icon={FileText}
        title="Listing分析"
        description="深入分析Listing表现，发现优化空间。"
      />
      <FeatureCard
        icon={Search}
        title="关键词推荐"
        description="智能推荐高效关键词，增加流量。"
      />
      <FeatureCard
        icon={TrendingUp}
        title="改款分析建议"
        description="提供产品改款分析建议，优化产品线。"
      />
    </div>
  );
}

export function MarketingFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={MessageCircle}
        title="买家消息回复生成"
        description="快速生成买家消息回复，提升响应速度。"
      />
      <FeatureCard
        icon={ThumbsDown}
        title="差评回复生成"
        description="生成差评回复，妥善处理客户问题。"
      />
      <FeatureCard
        icon={MessageSquare}
        title="评论回复生成"
        description="为客户评论生成合适的回复，提高互动性。"
      />
      <FeatureCard
        icon={Mail}
        title="售后邮件回复生成"
        description="生成售后邮件回复，提高客户满意度。"
      />
      <FeatureCard
        icon={Mail}
        title="邮件回复生成"
        description="自动生成邮件回复，提升售后服务效率。"
      />
      <FeatureCard
        icon={BarChart2}
        title="客户评论分析"
        description="分析客户评论，洞察用户需求。"
      />
    </div>
  );
}

export function AdvertisingFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={Target}
        title="推广建议"
        description="提供有效的推广建议，提高营销效果。"
      />
      <FeatureCard
        icon={TrendingUp}
        title="流行词推荐"
        description="推荐当前流行词汇，紧跟趋势。"
      />
      <FeatureCard
        icon={Share2}
        title="Post生成"
        description="快速生成社交媒体Post，提升品牌曝光。"
      />
      <FeatureCard
        icon={MessageSquare}
        title="评论生成"
        description="自动生成客户评论，增加社交信任。"
      />
      <FeatureCard
        icon={Presentation}
        title="广告标题生成"
        description="生成吸引眼球的广告标题，提升点击率。"
      />
    </div>
  );
}

export function CommunicationFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={MessageCircle}
        title="商品介绍生成"
        description="生成详细商品介绍，提升用户转化。"
      />
      <FeatureCard
        icon={Mail}
        title="外贸开发信生成"
        description="生成外贸开发信，开拓更多市场。"
      />
      <FeatureCard
        icon={MessageSquare}
        title="Case Study生成"
        description="自动生成案例研究，展示产品优势。"
      />
      <FeatureCard
        icon={MessageSquare}
        title="营销邮件生成"
        description="生成精准营销邮件，助力促销活动。"
      />
      <FeatureCard
        icon={MessageSquare}
        title="带货邀约信生成"
        description="生成KOL带货邀约信，增加合作机会。"
      />
      <FeatureCard
        icon={MessageSquare}
        title="询价邮件生成"
        description="自动生成询价邮件，提升沟通效率。"
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
