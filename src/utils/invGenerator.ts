import { v4 as uuidv4 } from 'uuid';

function generateInvoiceNumber() {
    const uuid = uuidv4().replace(/[^0-9]/g, '')
    const invoiceNumber = uuid.slice(0, 4);

    return invoiceNumber.padStart(4, '0');
}

export default generateInvoiceNumber;