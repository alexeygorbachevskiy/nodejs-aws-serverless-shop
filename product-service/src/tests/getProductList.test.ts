import {ProductService} from "./inMemoryProductService";
import {getProductList} from "./testHandlers";

describe('getProductList lambda handler', () => {

    test('should return data', async () => {
        const productService = new ProductService();
        const expectedProducts = await productService.getProductList();

        const actualProducts = await getProductList(undefined);

        const {body, statusCode} = actualProducts;
        const data = JSON.parse(body as string)

        expect(data).toEqual(expectedProducts);
        expect(statusCode).toEqual(200);
    });
});
