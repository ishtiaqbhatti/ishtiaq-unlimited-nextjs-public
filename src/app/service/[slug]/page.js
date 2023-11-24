import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'
import Sections from '@/_components/sections/Sections'


export default async function Page({params}) {

  const serviceBySlug = await getServiceBySlug(params);
  const data = serviceBySlug?.[0];

 



  return (
    <main>
      <Text>{data?.id}</Text>
      <Text>{data?.attributes?.Headline}</Text>
      <Text>{data?.slug}</Text>
      {/* <PageContainer data={data}> */}

        {/* <Sections data={data} /> */}
        
      {/* </PageContainer> */}
    </main>
  )
}

export async function generateStaticParams() {
  const services = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services').then((res) => res.json())

  return services.data.map((item) => ({
    slug: item.attributes.slug
  }))
}

async function getServiceBySlug(params) {
  try {
    const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services?filters[slug][$eq]=${slug}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const service = await response.json();

    return service?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}
