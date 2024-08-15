import { Customer, Invoice } from 'types/types';
import { firestore } from './firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, where, query } from 'firebase/firestore';

export const addCustomer = async (document: any) => {
    try {
        const docRef = await addDoc(collection(firestore, "customers"), document);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

export const getCustomers = async (collectionName: string): Promise<Customer[]> => {
    try {
        const querySnapshot = await getDocs(collection(firestore, collectionName));
        return querySnapshot.docs.map(doc => {
            const data = doc.data()

            const invoice: Customer = {
                id: doc.id,
                address: data?.address,
                email: data?.email,
                name: data?.name,
                phoneNumber: data?.phoneNumber
            }

            return invoice
        });
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
};

export const findCustomers = async (name: string): Promise<Customer[]> => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "customers"));
        const customers = querySnapshot.docs.map(doc => {
            const data = doc.data()

            const customers: Customer = {
                id: doc.id,
                address: data?.address,
                email: data?.email,
                name: data?.name,
                phoneNumber: data?.phoneNumber
            }

            return customers
        });
        return customers.filter(c => c.name?.toLocaleLowerCase()?.includes(name?.toLocaleLowerCase()))
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
};