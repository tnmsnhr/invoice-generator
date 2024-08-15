import { Invoice } from 'types/types';
import { firestore } from './firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const addDocument = async (collectionName: string, document: any) => {
    try {
        const docRef = await addDoc(collection(firestore, collectionName), document);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

export const getDocuments = async (collectionName: string): Promise<Invoice[]> => {
    try {
        const querySnapshot = await getDocs(collection(firestore, collectionName));
        return querySnapshot.docs.map(doc => {
            const data = doc.data()

            const invoice: Invoice = {
                id: doc.id,
                SGST: data?.SGST,
                CGST: data?.CGST,
                billingTo: {
                    address: data?.billingTo?.address,
                    email: data?.billingTo?.email,
                    name: data?.billingTo?.name,
                    phoneNumber: data?.billingTo?.phoneNumber
                },
                invoiceDate: data?.invoiceDate,
                itemsDetails: data?.itemsDetails,
                paymentDueDate: data?.paymentDueDate,
                total: data?.total,
                status: data?.status
            }

            return invoice
        });
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
};

export const updateDocument = async (collectionName: string, docId: string, updatedData: any) => {
    try {
        const docRef = doc(firestore, collectionName, docId);
        await updateDoc(docRef, updatedData);
    } catch (error) {
        console.error("Error updating document: ", error);
        throw error;
    }
};

export const deleteDocument = async (collectionName: string, docId: string) => {
    try {
        const docRef = doc(firestore, collectionName, docId);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting document: ", error);
        throw error;
    }
};
