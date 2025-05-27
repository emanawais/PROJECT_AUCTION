import { useState } from 'react'
import ProductCard from '../views/home/ProductCard'
import TestimonialBox from '../views/home/TestimonialBox'
import CardLayout from '../layout/CardLayout'
import SectionContainer from '../layout/SectionContainer'
import AuctionFilterComponent from '../views/home/AuctionFilterComponent'
import BidFormComponent from '../views/home/BidFormComponent'
import BidHistoryComponent from '../views/home/BidHistoryComponent'
import CountdownTimerComponent from '../views/home/CountdownTimerComponent'

function App() {
  return (
    <>
      <SectionContainer title="Featured Auctions" subtitle="Bid on exclusive items">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            title="Vintage Rolex Watch"
            description="1950s, Excellent Condition"
            image="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
            currentBid="2,450"
            endTime="12h 34m"
            bidCount={13}
          />
          <ProductCard
            title="Rare Picasso Sketch"
            description="Original pencil drawing, 1962"
            image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
            currentBid="8,750"
            endTime="1d 5h"
            bidCount={7}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-50">
        <CardLayout title="Customer Testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialBox
              name="John Smith"
              role="Collector since 2015"
              content="I've won several amazing pieces through this auction platform. The bidding process is transparent and the items are always as described."
              rating={5}
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialBox
              name="Sarah Johnson"
              role="Art Dealer"
              content="As a professional, I appreciate the quality of items and the fair bidding environment. Highly recommended for serious collectors."
              rating={4}
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
        </CardLayout>
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CardLayout title="Place Your Bid">
              <BidFormComponent />
            </CardLayout>
          </div>
          <div className="space-y-6">
            <CountdownTimerComponent />
            <BidHistoryComponent />
            <AuctionFilterComponent />
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default App
