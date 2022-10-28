import prismaClient from "../../prisma";

class ListProductsService{
  async execute(){

    const product = await prismaClient.product.findMany({
      orderBy:{
        created_at: 'desc'
      }
    })
    return product;
  }
}

export { ListProductsService }