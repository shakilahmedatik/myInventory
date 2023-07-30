import Container from '../Shared/Container'

const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
  },
]

const ShopByCategory = () => {
  return (
    <div aria-label='category-heading' className='pt-16 sm:pt-24 '>
      <Container>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <h2
            id='category-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            Shop by Category
          </h2>
          <a
            href='#'
            className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'
          >
            Browse all categories<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
        <div className='mt-4 flow-root'>
          <div className='-my-2'>
            <div className='box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible no-scrollbar'>
              <div className='absolute min-w-screen-xl flex space-x-8 xl:relative xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8'>
                {categories.map(category => (
                  <a
                    key={category.name}
                    href={category.href}
                    className='relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto'
                  >
                    <span aria-hidden='true' className='absolute inset-0'>
                      <img
                        src={category.imageSrc}
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </span>
                    <span
                      aria-hidden='true'
                      className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50'
                    />
                    <span className='relative mt-auto text-center text-xl font-bold text-white'>
                      {category.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 px-4 sm:hidden'>
          <a
            href='#'
            className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
          >
            Browse all categories<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default ShopByCategory
