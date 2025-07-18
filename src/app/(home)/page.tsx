import { HomeCard } from '@/components/shared/home/home-card'
import { HomeCarousel } from '@/components/shared/home/home-carousel'
import { getAllCategories, 
         getProductsForCard,
         getProductsByTag, 
} from '@/lib/actions/product.actions'
import { toSlug } from '@/lib/utils'
import data from '@/lib/data'
import ProductSlider from '@/components/shared/product/product-slider'
import { Card,
         CardContent,
 } from '@/components/ui/card'
 import BrowsingHistoryList from '@/components/shared/browsing-history-list'

export default async function HomePage() {
  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({
    tag: 'new-arrival',
    limit: 4,
  })
  const featureds = await getProductsForCard({
    tag: 'featured',
    limit: 4,
  })
  const bestSellers = await getProductsForCard({
    tag: 'best-seller',
    limit: 4,
  })
//   const todaysDeals = await getProductsByTag( {tag: 'today-deal'})

  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: 'Explore New Arrivals',
      items: newArrivals,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Discover Best Sellers',
      items: bestSellers,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Featured Products',
      items: featureds,
      link: {
        text: 'Shop Now',
        href: '/search?tag=new-arrival',
      },
    },
  ]
  const bestSellingProducts = await getProductsByTag({ tag: 'best-seller' })

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />
        <Card className="w-full rounded-none">
            <CardContent className="p-4 items-center gap-3">
                <ProductSlider 
                    title={"Today's Deal"} 
                    products={bestSellingProducts} 
                    hideDetails/>
            </CardContent>
        </Card>
        <div className='p-4 bg-background'>
          <BrowsingHistoryList />
        </div>
      </div>
    </>
  )
}