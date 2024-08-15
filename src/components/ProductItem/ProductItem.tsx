import Input from "UIComponents/Input"
import styles from "./productItem.module.css"
import { Product } from "types/types"
import Button from "UIComponents/Button";

type ProductKey = keyof Product;

interface ProductItemProps {
    data: Product,
    index: number,
    onChangeFieldValue: (index: number, key: ProductKey, value: any) => void,
    deleteProduct: (index: number) => void
}

const ProductItem: React.FC<ProductItemProps> = ({ data, index, onChangeFieldValue, deleteProduct }) => {
    return (
        <>
            <form className={`row ${styles.product} productListTable`}>
                <div className={`cell`} data-title="name">
                    <Input
                        className={styles.name}
                        value={data?.name}
                        required
                        onChange={(e) => {
                            onChangeFieldValue(index, "name", e?.target?.value)
                        }} />
                </div>
                <div className="cell" data-title="quantity">
                    <Input
                        className={styles.item}
                        type="number"
                        value={data?.quantity}
                        required
                        onChange={(e) => {
                            onChangeFieldValue(index, "quantity", +e?.target?.value)
                        }}
                    />
                </div>
                <div className="cell" data-title="price">
                    <Input
                        className={styles.item}
                        type="number"
                        value={data?.price}
                        required
                        onChange={(e) => {
                            onChangeFieldValue(index, "price", +e?.target?.value)
                        }}
                    />
                </div>
                <div className="cell" data-title="discount">
                    <Input
                        className={styles.item}
                        value={data?.discount}
                        type="number"
                        onChange={(e) => {
                            onChangeFieldValue(index, "discount", +e?.target?.value)
                        }}
                    />
                </div>
                <div className={`cell ${styles.total}`} data-title="discount">
                    ${data?.quantity * data?.price - data?.discount}
                </div>
                <div className="cell">
                    <Button variant="ghost" className={styles.delete} onClick={() => deleteProduct(index)}>X</Button>
                </div>
            </form>
        </>
    )
}

export default ProductItem