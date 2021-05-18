// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let data = [
    {
      product_id: 1,
      product_name: 'Vertical striped lapel short sleeves shirt',
      product_img: '/product-img-1.jpeg',
      price: 20.68,
      original_price: 52.98
    },
    {
      product_id: 2,
      product_name: `Men's green lapel casual polo shirt`,
      product_img: '/product-img-2.jpeg',
      price: 20.99,
      original_price: 27.91
    },
    {
      product_id: 3,
      product_name: `Men's retro print black casual comfortable shirt`,
      product_img: '/product-img-3.jpeg',
      price: 20.99,
      original_price: 27.91
    },
    {
      product_id: 4,
      product_name: 'Casual rhombus print comfortable black polo shirt',
      product_img: '/product-img-4.jpeg',
      price: 23.99,
      original_price: 39.97
    },
    {
      product_id: 5,
      product_name: 'Flowers embroidery casual western graphic tees',
      product_img: '/product-img-5.jpeg',
      price: 20.98,
      original_price: 29.48
    },
    {
      product_id: 6,
      product_name: 'Floral embroidery printed halter casual vest',
      product_img: '/product-img-6.jpeg',
      price: 18.98,
      original_price: 26.98
    },
    {
      product_id: 7,
      product_name: `Women's western flower embroidered graphic tees`,
      product_img: '/product-img-7.jpeg',
      price: 18.99,
      original_price: 31.63
    },
    {
      product_id: 8,
      product_name: 'Fashion flower embroidery western casual graphic tees',
      product_img: '/product-img-8.jpeg',
      price: 22.98,
      original_price: 32.98
    },
    {
      product_id: 9,
      product_name: 'Retro striped western casual graphic tees',
      product_img: '/product-img-9.jpeg',
      price: 20.98,
      original_price: 30.98
    },
    {
      product_id: 10,
      product_name: `Flowers embroidery black western graphic tees`,
      product_img: '/product-img-10.jpeg',
      price: 18.98,
      original_price: 31.63
    },
    {
      product_id: 11,
      product_name: `A pair of dancers dancing print fashion shirt`,
      product_img: '/product-img-11.jpeg',
      price: 22.98,
      original_price: 32.98
    },
    {
      product_id: 12,
      product_name: `Black and gray single-breasted men's polo shirt`,
      product_img: '/product-img-12.jpeg',
      price: 21.99,
      original_price: 35.92
    }
  ]
  res.status(200).json(data)
}
