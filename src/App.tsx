import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import {
  CommonFeatures,
  ProductFeatures,
  MarketingFeatures,
  AdvertisingFeatures,
  CommunicationFeatures,
  OtherFeatures
} from "@/components/TabSections";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <Header />
        
        <Tabs defaultValue="common" className="space-y-8">
          <TabsList className="justify-start flex-wrap">
            <TabsTrigger value="common">主页</TabsTrigger>
            <TabsTrigger value="product">商品</TabsTrigger>
            <TabsTrigger value="marketing">营销</TabsTrigger>
            <TabsTrigger value="advertising">广告</TabsTrigger>
            <TabsTrigger value="communication">沟通</TabsTrigger>
            <TabsTrigger value="other">其他</TabsTrigger>
          </TabsList>

          <TabsContent value="common">
            <CommonFeatures />
          </TabsContent>

          <TabsContent value="product">
            <ProductFeatures />
          </TabsContent>

          <TabsContent value="marketing">
            <MarketingFeatures />
          </TabsContent>

          <TabsContent value="advertising">
            <AdvertisingFeatures />
          </TabsContent>

          <TabsContent value="communication">
            <CommunicationFeatures />
          </TabsContent>

          <TabsContent value="other">
            <OtherFeatures />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}