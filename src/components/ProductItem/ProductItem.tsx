import Input from "UIComponents/Input"
import * as  styles from "./productItem.module.css"
import { Product } from "types/types"
import Button from "UIComponents/Button";
import Text from "UIComponents/Text";
import { TextColor, TextType } from "UIComponents/Text/Text";

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
            <div className={`row ${styles.product} productListTable`}>
                <div className={`cell`} data-title="name">
                    <Text
                        className={styles.cellLabel}
                        type={TextType.CaptionBold}
                        color={TextColor.Grey}
                        style={{ marginBottom: "0.5rem" }}>
                        Item Name
                    </Text>
                    <Input
                        value={data?.name}
                        required
                        name="name"
                        onChange={(e) => {
                            onChangeFieldValue(index, "name", e?.target?.value)
                        }} />
                </div>
                <div className="cell" data-title="quantity">
                    <Text
                        className={styles.cellLabel}
                        type={TextType.CaptionBold}
                        color={TextColor.Grey}
                        style={{ marginBottom: "0.5rem" }}>
                        Quantity
                    </Text>
                    <Input
                        type="number"
                        defaultValue={data?.quantity}
                        min={1}
                        required
                        onChange={(e) => {
                            onChangeFieldValue(index, "quantity", +e?.target?.value)
                        }}
                    />
                </div>
                <div className="cell" data-title="price">
                    <Text
                        className={styles.cellLabel}
                        type={TextType.CaptionBold}
                        color={TextColor.Grey}
                        style={{ marginBottom: "0.5rem" }}>
                        Price
                    </Text>
                    <Input

                        type="number"
                        defaultValue={data?.price}
                        required
                        min={0}
                        onChange={(e) => {
                            onChangeFieldValue(index, "price", +e?.target?.value)
                        }}
                    />
                </div>
                <div className="cell" data-title="discount">
                    <Text
                        className={styles.cellLabel}
                        type={TextType.CaptionBold}
                        color={TextColor.Grey}
                        style={{ marginBottom: "0.5rem" }}>
                        Discount
                    </Text>
                    <Input
                        defaultValue={data?.discount}
                        type="number"
                        onChange={(e) => {
                            onChangeFieldValue(index, "discount", +e?.target?.value)
                        }}
                    />
                </div>
                <div className={`cell ${styles.total}`} data-title="discount">
                    <Text
                        className={styles.cellLabel}
                        type={TextType.CaptionBold}
                        color={TextColor.Grey}
                        style={{ marginBottom: "0.5rem" }}>
                        Total
                    </Text>
                    ${(data?.quantity * data?.price - data?.discount)?.toFixed(2)}
                </div>
                <div className="cell">
                    <Button
                        type="button"
                        variant="ghost"
                        className={styles.delete}
                        onClick={() => deleteProduct(index)}
                        data-testid="delete-item">
                        X
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductItem