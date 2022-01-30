// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const items = [
  {
    name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
    favorite:true,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 2.5,
    priceFrom: 380.00,
    priceTo: 280.90,
    freeDispatching: false,
    openBox:true
  },
  {
    name: "Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
    favorite:false,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 0.5,
    priceFrom: 380.00,
    priceTo: 280.90,
    freeDispatching: false,
    openBox:false
  },
  {
    name: "2Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
    favorite:true,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 5,
    priceFrom: 380.00,
    priceTo: 280.90,
    freeDispatching: true,
    openBox:true
  },
  {
    name: "3Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
    favorite:false,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 4.5,
    priceFrom: 380.00,
    priceTo: 280.90,
    freeDispatching: true,
    openBox:false
  },
  {
    name: "4Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
    favorite:false,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 4.5,
    priceFrom: 1480.00,
    priceTo: 1280.90,
    freeDispatching: true,
    openBox:false
  },
  {
    name: "5Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
    favorite:false,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 4.5,
    priceFrom: 380.00,
    priceTo: 280.90,
    freeDispatching: false,
    openBox:true
  },
  {
    name: "6Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
    favorite:false,
    maker:'Fabricante',
    img:"https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg",
    rating: 4.5,
    priceFrom: 380.00,
    priceTo: 280.90,
    freeDispatching: true,
    openBox:true
  },
]
export default function handler(req, res) {
  res.status(200).json(items)
}
