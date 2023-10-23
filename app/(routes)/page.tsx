import getBillboard from '@/actions/GetBillboard';
import getProducts from '@/actions/GetProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

import React from 'react'

const page = async() => {

   const billboard = await getBillboard('e01ed198-5aa1-42b6-aff3-cecfb85ffbc3')
  
   const products = await getProducts({ isFeatured: true}); 

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default page; 