import { AnimatePresence, motion } from 'framer-motion';

import ProductItem from "components/ProductItem"
import * as  styles from "./productList.module.css"
import Text from "UIComponents/Text"
import { TextColor, TextType } from "UIComponents/Text/Text"
import Button from "UIComponents/Button"
import { Invoice, Product } from "types/types"
import React, { useEffect, useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { ProductFactory } from 'factories/ProductFactory';

interface ProductListProps {
    invoice: Invoice | null,
    updateSelectedInvoice: (invoice: Invoice) => void
}

type ProductKey = keyof Product;

const ProductList: React.FC<ProductListProps> = React.memo(({ invoice, updateSelectedInvoice }) => {

    const [invoiceDetails, setInvoiceDetails] = useState<Invoice>()

    const handleAddItem = () => {
        const updatedInvoiceDetails = { ...invoiceDetails }

        const newProduct = ProductFactory.create()

        updatedInvoiceDetails?.itemsDetails?.push(newProduct)
        setInvoiceDetails(updatedInvoiceDetails as Invoice)
        updateSelectedInvoice(updatedInvoiceDetails as Invoice)
    }

    useEffect(() => {
        setInvoiceDetails(invoice as Invoice)
    }, [invoice])

    const onChangeFieldValue = (index: number, key: ProductKey, value: any) => {
        const updatedInvoices = { ...invoiceDetails }
        const updatedProducts = updatedInvoices.itemsDetails
        if (updatedProducts && updatedProducts[index]) {
            updatedProducts[index][key] = value
        }

        updatedInvoices.itemsDetails = updatedProducts
        console.log("onChangeFieldValue", key, value)
        setInvoiceDetails(updatedInvoices as Invoice)
        updateSelectedInvoice(updatedInvoices as Invoice)
    }

    const deleteProduct = (index: number) => {
        const updatedInvoices = { ...invoiceDetails }
        const updatedProducts = updatedInvoices.itemsDetails
        if (updatedProducts && updatedProducts[index]) {
            updatedProducts.splice(index, 1)
        }

        updatedInvoices.itemsDetails = updatedProducts

        setInvoiceDetails(updatedInvoices as Invoice)
        updateSelectedInvoice(updatedInvoices as Invoice)
    }

    return (
        <div className={styles.productListsContainer}>
            <div className={styles.header}>
                <div className={`table productListTable`}>
                    <div className={`row`}>
                        <div className={`cell`}>
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Items</Text>
                        </div>
                        <div className="cell">
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Quanity</Text>
                        </div>
                        <div className="cell">
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Price</Text>
                        </div>
                        <div className="cell">
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Discount</Text>
                        </div>
                        <div className={`cell ${styles.total}`}>
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Total</Text>
                        </div>
                        <div className="cell">

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productLists}>
                <AnimatePresence>
                    {invoice?.itemsDetails?.map((el, index) => <motion.div
                        key={el.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <ProductItem
                            data={el}
                            index={index}
                            onChangeFieldValue={onChangeFieldValue}
                            deleteProduct={deleteProduct}
                        />
                    </motion.div>)}
                </AnimatePresence>
            </div>
            <Button
                className={`align-center ${styles.itemAddButton}`}
                onClick={handleAddItem}
                variant="outline"
                type="button"
                data-testid={"add-item"}
            >Add an item
                <IoMdAdd size={24} style={{
                    marginLeft: "0.5rem"
                }} />
            </Button>
        </div>
    )
})
export default ProductList